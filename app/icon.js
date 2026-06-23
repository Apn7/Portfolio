import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#029ed7', // Primary teal
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
            background: '#fada1b', // Graffiti yellow
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
              background: '#fada1b',
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
