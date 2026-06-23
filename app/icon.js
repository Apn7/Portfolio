import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  let primaryColor = '#029ed7'; // fallback teal
  let bubbleColor = '#fada1b';  // fallback yellow

  try {
    const cssPath = path.join(process.cwd(), 'app', 'theme.generated.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    const primaryMatch = cssContent.match(/--primary:\s*(#[a-fA-F0-9]{6});/);
    const cardBgMatch = cssContent.match(/--card-bg-1:\s*(#[a-fA-F0-9]{6});/);

    if (primaryMatch) primaryColor = primaryMatch[1];
    if (cardBgMatch) bubbleColor = cardBgMatch[1];
  } catch (e) {
    // Keep defaults if file reading fails
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: primaryColor,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Comic Speech Bubble */}
        <div
          style={{
            background: bubbleColor,
            border: '2px solid #1a202c',
            borderRadius: '4px',
            width: '24px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '1px 1px 0 #1a202c',
          }}
        >
          {/* Terminal Prompt Text */}
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: '900',
              color: '#1a202c',
              lineHeight: 1,
              marginTop: '-1px',
            }}
          >
            &gt;_
          </span>

          {/* Bubble Tail */}
          <div
            style={{
              position: 'absolute',
              bottom: '-4px',
              left: '5px',
              width: '5px',
              height: '5px',
              background: bubbleColor,
              borderLeft: '2px solid #1a202c',
              borderBottom: '2px solid #1a202c',
              transform: 'rotate(-45deg)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
