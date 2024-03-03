<?php include 'include/config.php';
$sql = "SELECT * FROM users WHERE id=1";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_array($result);
?>

<!DOCTYPE html>
<html lang="en" id="html">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
  <!--CSS-->
  <link rel="stylesheet" href="assets\css\style.css" />

  <title>Portfolio Website</title>
</head>

<body>
  <!--Header-->
  <header class="header" id="header">
    <nav class="nav container">
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li onclick="showSidebar()">
            <a class="nav__toggle nav__link">
              <i class="ri-menu-fill"></i>
            </a>
          </li>
          <li>
            <a href="#home" class="nav__link active-link hom">Hello</a>
          </li>
          <li>
            <a href="#resume" class="nav__link hom">Resume</a>
          </li>
          <li>
            <a href="#skills" class="nav__link hom">Skill</a>
          </li>
          <li>
            <a href="#services" class="nav__link hom">Projects</a>
          </li>
          <li>
            <a href="#contact" class="nav__link hom">Contact</a>
          </li>
        </ul>

        <ul class="sidebar">
          <li onclick="hideSidebar()">
            <a class="nav__close nav__link">
              <i class="ri-close-fill"></i>
            </a>
          </li>
          <li>
            <a href="#home" class="nav__link active-link">Hello</a>
          </li>
          <li>
            <a href="#resume" class="nav__link">Resume</a>
          </li>
          <li>
            <a href="#skills" class="nav__link">Skill</a>
          </li>
          <li>
            <a href="#services" class="nav__link">Projects</a>
          </li>
          <li>
            <a href="#contact" class="nav__link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!--Main-->
  <main class="main">
    <!--Home-->
    <section class="home" id="home">
      <div class="home__container container grid">
        <img src="<?= $data['img_url'] ?>" alt="" class="home__img" />

        <div class="home__data">
          <h1 class="home__name">
            <?= $data['name'] ?>
          </h1>
          <p class="home__work">
            <?= $data['title'] ?>
          </p>
          <dl class="home__list">
            <dt>Email:</dt>
            <dd>
              <?= $data['email'] ?>
            </dd>
            <dt>Phone:</dt>
            <dd>
              <?= $data['phone'] ?>
            </dd>
            <dt>Address:</dt>
            <dd>
              <?= $data['address'] ?>
            </dd>
          </dl>
          <div class="home__socials">
            <a href="<?= $data['github'] ?>" target="__blank" class="home__social-link">
              <i class="ri-github-fill"></i>
            </a>
            <a href="<?= $data['facebook'] ?>" target="__blank" class="home__social-link">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="<?= $data['linkedin'] ?>" target="__blank" class="home__social-link">
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--hello-->
    <section class="hello section container">
      <h2 class="section__title">
        <?= $data['hello'] ?>
      </h2>
      <p class="hello__details text-lg">
        <?= $data['about'] ?>
      </p>
      <a href="assets/img/My Resume.pdf" class="button button--flex text-sm" target="_blank">
        <i class="ri-download-2-line"> DOWNLOAD RESUME </i>
      </a>
    </section>


    <!-- resume -->
    <section class="resume section" id="resume">
      <div class="resume__container">
        <main class="row">
          <!-- education -->
          <section class="col">
            <header class="title">
              <h2>Education</h2>
            </header>
            <div class="contents">
              <?php
              $edu = "SELECT * FROM education";
              $edu_result = mysqli_query($con, $edu);

              if ($edu_result->num_rows > 0) {
                while ($rows = $edu_result->fetch_assoc()) {
                  ?>
                  <div class="box">
                    <h4>
                      <?= $rows['time'] ?>
                    </h4>
                    <h3>
                      <?= $rows['title'] ?>
                    </h3>
                    <p>
                      <?= $rows['details'] ?>
                    </p>
                  </div>
                  <?php
                }
              }
              ?>
            </div>
          </section>

          <!-- experience  -->

          <section class="col">
            <header class="title">
              <h2>Experience</h2>
            </header>
            <div class="contents">
              <?php
              $exp = "SELECT * FROM experience";
              $exp_result = mysqli_query($con, $exp);

              if ($exp_result->num_rows > 0) {
                while ($rows = $exp_result->fetch_assoc()) {
                  ?>
                  <div class="box">
                    <h4>
                      <?= $rows['time'] ?>
                    </h4>
                    <h3>
                      <?= $rows['title'] ?>
                    </h3>
                    <p>
                      <?= $rows['details'] ?>
                    </p>
                  </div>
                  <?php
                }
              }
              ?>
            </div>
          </section>

        </main>
      </div>
    </section>

    <!-- skills -->

    <section class="section container" id="skills">
      <h2 class="section__title">Skills</h2>

      <div class="skills__container grid">
        <div class="skills__content">
          <h3 class="skills__title text-sm">Programming languages:</h3>

          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">C++</p>
                <span class="skills__number text-sm">90%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width:90% "></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">Java</p>
                <span class="skills__number text-sm">55%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 55%"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">Javascript</p>
                <span class="skills__number text-sm">50%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width:50% "></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">Python</p>
                <span class="skills__number text-sm">40%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 40%"></span>
              </div>
            </div>

          </div>
        </div>

        <div class="skills__content">
          <h3 class="skills__title text-sm">Web Development:</h3>

          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">HTML</p>
                <span class="skills__number text-sm">90%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 90%"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">CSS</p>
                <span class="skills__number text-sm">75%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width:75% "></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">Javascript</p>
                <span class="skills__number text-sm">50%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 50%"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">PHP</p>
                <span class="skills__number text-sm">50%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width: 50%"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <p class="skills__name text-sm">MySQL</p>
                <span class="skills__number text-sm">40%</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" style="width:40% "></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- Projects -->
    <section class="services section container" id="services">
      <h2 class="section__title">My Projects</h2>
      <div class="services__container grid">
        <?php
        $pro = "SELECT * FROM projects";
        $pro_result = mysqli_query($con, $pro);

        if ($pro_result->num_rows > 0) {
          while ($rows = $pro_result->fetch_assoc()) {
            ?>
            <a href="<?= $rows['plink'] ?>" class="services__item">
              <h3 class="services__title text-lg">
                <?= $rows['pname'] ?>
              </h3>
              <img src="<?= $rows['pimg'] ?>" alt="" class="services__img" />
              <p class="services__detail">
                <?= $rows['details'] ?>
              </p>
              <p class="services__lang">Used languages:
                <?= $rows['ul'] ?>
              </p>
            </a>
            <?php
          }
        }
        ?>
      </div>
    </section>
    <!--Contact-->
    <section class="contact section" id="contact">
      <div class="contact__content container">
        <h2 class="section__title">Contact Me</h2>
        <div class="contact__container grid">
          <div class="contact__info">
            <dl class="contact__list">
              <dt>Phone:</dt>
              <dd><?= $data['phone'] ?></dd>
              <dt>Email:</dt>
              <dd><?= $data['email'] ?></dd>
            </dl>

            <ul class="contact__socials">
              <li>
                <a href="<?= $data['facebook'] ?>" class="contact__social-link">
                  <i class="ri-facebook-box-fill"></i>
                </a>
                <a href="<?= $data['linkedin'] ?>" class="contact__social-link">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
                <a href="<?= $data['github'] ?>" class="contact__social-link">
                  <i class="ri-github-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="contact__form">
            <p class="contact__form-title">Or just write me a letter here</p>

            <?php
            if (isset($_POST['send_message'])) {
              $name = mysqli_real_escape_string($con, $_POST['name']);
              $email = mysqli_real_escape_string($con, $_POST['email']);
              $message = mysqli_real_escape_string($con, $_POST['message']);
              $contact = "INSERT INTO `contact` (`name`, `email`, `message`) VALUES ('$name', '$email','$message')";
              if(mysqli_query($con, $contact)){
                $error= "Message sent successfully.";
              }
              else{
                $error= "Failed to send message :(";
              }
            }
            ?>

            <form method="POST" id="contact-form" action="#">
              <div class="contact__input-div">
                <input type="text" name="name" placeholder="Your name" class="contact__input" id="contact-name" />
              </div>
              <div class="contact__input-div">
                <input type="email" name="email" placeholder="Your e-mail" class="contact__input" id="contact-email" />
              </div>
              <div class="contact__input-div">
                <textarea name="message" placeholder="Type the message here" class="contact__input textarea"
                  id="message" cols="30" rows="10"></textarea>
              </div>
              <?php if (isset($error)) { ?>
                <p class="contact__message text-sm">
                  <?php echo $error; ?>
                </p>
              <?php } ?>
              <button type="submit" class="button contact__button" name="send_message">
                Send Message
              </button>
            </form>

            <p class="footer__copy">
              &copy; 2021 <a href="adminlogin.php">Ekramul Alam.</a> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- checking -->
  </main>
  <!--JS-->
  <script src="assets/js/main.js"></script>
</body>

</html>