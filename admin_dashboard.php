<?php
include 'include/config.php';
session_start();

if (!isset($_SESSION['admin'])) {
    header("Location: adminlogin.php");
    exit();
}

// Fetch user details from the database
$query = "SELECT * FROM users";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_assoc($result);

// Fetch education details from the database
$educationQuery = "SELECT * FROM education";
$educationResult = mysqli_query($con, $educationQuery);

// Fetch education details from the database
$experienceQuery = "SELECT * FROM experience";
$experienceResult = mysqli_query($con, $experienceQuery);

// SQL query to retrieve data from the 'contact' table
$contactQuery = "SELECT * FROM contact";
$contactResult = mysqli_query($con, $contactQuery);

//delete contact message
if(isset($_GET['delete'])){
    $id = $_GET['delete'];
    $deleteQuery = "DELETE FROM contact WHERE id = $id";
    mysqli_query($con, $deleteQuery);
    header("Location: admin_dashboard.php");
    exit();
}

// Fetch projects details from the database
$projectsQuery = "SELECT * FROM projects";
$projectsResult = mysqli_query($con, $projectsQuery);

// Check if form is submitted for updating user details
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Update user details
    if (isset($_POST['update_user'])) {
        $updateQuery = "UPDATE users SET ";

        if (!empty($_POST['name'])) {
            $name = $_POST['name'];
            $updateQuery .= "name='$name', ";
        }

        if (!empty($_POST['email'])) {
            $email = $_POST['email'];
            $updateQuery .= "email='$email', ";
        }

        if (!empty($_POST['phone'])) {
            $phone = $_POST['phone'];
            $updateQuery .= "phone='$phone', ";
        }

        if (!empty($_POST['address'])) {
            $address = $_POST['address'];
            $updateQuery .= "address='$address', ";
        }

        if (!empty($_POST['title'])) {
            $title = $_POST['title'];
            $updateQuery .= "title='$title', ";
        }

        if (!empty($_POST['img_url'])) {
            $img_url = $_POST['img_url'];
            $updateQuery .= "img_url='$img_url', ";
        }

        if (!empty($_POST['facebook'])) {
            $facebook = $_POST['facebook'];
            $updateQuery .= "facebook='$facebook', ";
        }

        if (!empty($_POST['github'])) {
            $github = $_POST['github'];
            $updateQuery .= "github='$github', ";
        }

        if (!empty($_POST['linkedin'])) {
            $linkedin = $_POST['linkedin'];
            $updateQuery .= "linkedin='$linkedin', ";
        }

        if (!empty($_POST['hello'])) {
            $hello = $_POST['hello'];
            $updateQuery .= "hello='$hello', ";
        }

        if (!empty($_POST['about'])) {
            $about = $_POST['about'];
            $updateQuery .= "about='$about', ";
        }

        // Remove the trailing comma and space from the update query
        $updateQuery = rtrim($updateQuery, ', ');

        // Add the WHERE clause to update only the specific user
        $updateQuery .= " WHERE id = " . $row['id'];

        // Update the user details in the database
        mysqli_query($con, $updateQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }

    // Update education details
    if (isset($_POST['update_education'])) {
        $educationId = $_POST['education_id'];
        $educationTitle = $_POST['education_title'];
        $educationTime = $_POST['education_time'];
        $educationDetails = $_POST['education_details'];

        $updateEducationQuery = "UPDATE education SET title='$educationTitle', time='$educationTime', details='$educationDetails' WHERE id = $educationId";
        mysqli_query($con, $updateEducationQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }

    // Add new education details
    if (isset($_POST['add_education'])) {
        $newEducationTitle = $_POST['new_education_title'];
        $newEducationTime = $_POST['new_education_time'];
        $newEducationDetails = $_POST['new_education_details'];

        $addEducationQuery = "INSERT INTO education (title, time, details) VALUES ('$newEducationTitle', '$newEducationTime', '$newEducationDetails')";
        mysqli_query($con, $addEducationQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }

    // Delete education details
    if (isset($_POST['delete_education'])) {
        $educationId = $_POST['education_id'];
        $deleteEducationQuery = "DELETE FROM education WHERE id = $educationId";
        mysqli_query($con, $deleteEducationQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }


    // Update experience details
    if (isset($_POST['update_experience'])) {
        $experienceId = $_POST['experience_id'];
        $experienceTitle = $_POST['experience_title'];
        $experienceTime = $_POST['experience_time'];
        $experienceDetails = $_POST['experience_details'];

        $updateExperienceQuery = "UPDATE experience SET title='$experienceTitle', time='$experienceTime', details='$experienceDetails' WHERE id = $experienceId";
        mysqli_query($con, $updateExperienceQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }

    // Add new experience details
    if (isset($_POST['add_experience'])) {
        $newExperienceTitle = $_POST['new_experience_title'];
        $newExperienceTime = $_POST['new_experience_time'];
        $newExperienceDetails = $_POST['new_experience_details'];

        $addExperienceQuery = "INSERT INTO experience (title, time, details) VALUES ('$newExperienceTitle', '$newExperienceTime', '$newExperienceDetails')";
        mysqli_query($con, $addExperienceQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }

    // Delete education details
    if (isset($_POST['delete_experience'])) {
        $experienceId = $_POST['experience_id'];
        $deleteExperienceQuery = "DELETE FROM experience WHERE id = $experienceId";
        mysqli_query($con, $deleteExperienceQuery);

        // Refresh the page to reflect the updated details
        header("Location: admin_dashboard.php");
        exit();
    }

    //Update project details
    if(isset($_POST["updateProject"])){
        $project_id = $_POST["project_id"];
        $project_title = $_POST["project_title"];
        $project_description = $_POST["project_description"];
        $project_url = $_POST["project_url"];
        $project_img = $_POST["project_pimg"];
        $project_ul = $_POST["project_ul"];
        $updateProjectQuery = "UPDATE projects SET pname='$project_title', details='$project_description', plink='$project_url', pimg='$project_img', ul ='$project_ul' WHERE id = $project_id";
        mysqli_query($con, $updateProjectQuery);
        header("Location: admin_dashboard.php");
        exit();
    }

    //Add new project details
    if(isset($_POST["addProject"])){
        $new_project_title = $_POST["new_project_title"];
        $new_project_img = $_POST["new_project_img"];
        $new_project_description = $_POST["new_project_description"];
        $new_project_url = $_POST["new_project_url"];
        $new_project_ul = $_POST["new_project_ul"];
        $addProjectQuery = "INSERT INTO projects (pname, pimg , details, plink, ul) VALUES ('$new_project_title', '$new_project_img' , '$new_project_description', '$new_project_url','$new_project_ul')";
        mysqli_query($con, $addProjectQuery);
        header("Location: admin_dashboard.php");
        exit();
    }

    //Delete project details
    if(isset($_POST["deleteProject"])){
        $project_id = $_POST["project_id"];
        $deleteProjectQuery = "DELETE FROM projects WHERE id = $project_id";
        mysqli_query($con, $deleteProjectQuery);
        header("Location: admin_dashboard.php");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Admin</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }

        .admin_details {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .form-group textarea[name="about"] {
            resize: vertical;
            height: 100px;
        }

        .form-group button {
            padding: 10px 20px;
            background-color: #029ed7;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .education {
            margin-top: 100px;
        }

        .education h2 {
            text-align: center;
        }

        .education table {
            width: 100%;
            border-collapse: collapse;
        }

        .education th,
        .education td {
            padding: 10px;
            border: 1px solid #ccc;
        }

        .education th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        .education td input,
        .education td textarea {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .education td button {
            padding: 5px 10px;
            background-color: #029ed7;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .projects {
            margin-top: 100px;
        }

        .projects h2 {
            text-align: center;
        }

        .projects table {
            width: 100%;
            border-collapse: collapse;
        }

        .projects th,
        .projects td {
            padding: 10px;
            border: 1px solid #ccc;
        }

        .projects th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        .projects td input,
        .projects td textarea {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .projects td button {
            padding: 5px 10px;
            background-color: #029ed7;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .experience {
            margin-top: 100px;
        }

        .experience h2 {
            text-align: center;
        }

        .experience table {
            width: 100%;
            border-collapse: collapse;
        }

        .experience th,
        .experience td {
            padding: 10px;
            border: 1px solid #ccc;
        }

        .experience th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        .experience td input,
        .experience td textarea {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .experience td button {
            padding: 5px 10px;
            background-color: #029ed7;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .contact {
            margin-top: 100px;
            text-align: center;
        }

        .contact .container {
            margin-top: 20px;
            display: flex;
            justify-content: center;
        }

        .card {
            width: 300px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 15px;
            padding: 20px;
            border-radius: 8px;
            transition: transform 0.3s ease-in-out;
        }

        .card:hover {
            transform: scale(1.05);
        }

        .contact .card h3{
            color: #333;
        }

        .contact .card p{
            color: #555;
        }

        .logout{
            text-align: center;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        .logout button{
            padding: 10px 20px;
            background-color: #029ed7;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s
        }

    </style>
</head>

<body>
    <div class="admin_details">
        <h1>About Admin</h1>
        <!-- HTML form to display user details and allow updating -->
        <form method="POST" action="">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" value="<?php echo $row['name']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" name="email" value="<?php echo $row['email']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="text" name="phone" value="<?php echo $row['phone']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" name="address" value="<?php echo $row['address']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" name="title" value="<?php echo $row['title']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="img_url">Img_url:</label>
                <input type="text" name="img_url" value="<?php echo $row['img_url']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="facebook">Facebook:</label>
                <input type="text" name="facebook" value="<?php echo $row['facebook']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="github">GitHub:</label>
                <input type="text" name="github" value="<?php echo $row['github']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="linkedin">LinkedIn:</label>
                <input type="text" name="linkedin" value="<?php echo $row['linkedin']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="hello">Hello:</label>
                <input type="text" name="hello" value="<?php echo $row['hello']; ?>">
                <button type="submit" name="update_user">Update</button>
            </div>

            <div class="form-group">
                <label for="about">About:</label>
                <textarea name="about" rows="5"><?php echo $row['about']; ?></textarea>
                <button type="submit" name="update_user">Update</button>
            </div>
        </form>
    </div>

    <div class="education">
        <h2>Education</h2>
        <table>
            <tr>
                <th>Time</th>
                <th>Title</th>
                <th>Details</th>
                <th>Actions</th>
            </tr>
            <?php while ($educationRow = mysqli_fetch_assoc($educationResult)) { ?>
                <tr>
                    <form method="POST" action="">
                        <td><input type="text" name="education_time" value="<?php echo $educationRow['time']; ?>"></td>
                        <td><input type="text" name="education_title" value="<?php echo $educationRow['title']; ?>"></td>
                        <td><textarea name="education_details" rows="2"><?php echo $educationRow['details']; ?></textarea>
                        </td>
                        <td>
                            <input type="hidden" name="education_id" value="<?php echo $educationRow['id']; ?>">
                            <button type="submit" name="update_education">Update</button>
                            <button type="submit" name="delete_education">Delete</button>
                        </td>
                    </form>
                </tr>
            <?php } ?>
            <tr>
                <th colspan="4">Add New Education</th>
            </tr>
            <tr>
                <form method="POST" action="">
                    <td><input type="text" name="new_education_time"></td>
                    <td><input type="text" name="new_education_title"></td>
                    <td><textarea name="new_education_details" rows="2"></textarea></td>
                    <td>
                        <button type="submit" name="add_education">Add</button>
                    </td>
                </form>
            </tr>
        </table>
    </div>


    <div class="experience">
        <h2>Experience</h2>
        <table>
            <tr>
                <th>Time</th>
                <th>Title</th>
                <th>Details</th>
                <th>Actions</th>
            </tr>
            <?php while ($experienceRow = mysqli_fetch_assoc($experienceResult)) { ?>
                <tr>
                    <form method="POST" action="">
                        <td><input type="text" name="experience_time" value="<?php echo $experienceRow['time']; ?>"></td>
                        <td><input type="text" name="experience_title" value="<?php echo $experienceRow['title']; ?>"></td>
                        <td><textarea name="experience_details" rows="2"><?php echo $experienceRow['details']; ?></textarea>
                        </td>
                        <td>
                            <input type="hidden" name="experience_id" value="<?php echo $experienceRow['id']; ?>">
                            <button type="submit" name="update_experience">Update</button>
                            <button type="submit" name="delete_experience">Delete</button>
                        </td>
                    </form>
                </tr>
            <?php } ?>
            <tr>
                <th colspan="4">Add New Experience</th>
            </tr>
            <tr>
                <form method="POST" action="">
                    <td><input type="text" name="new_experience_time"></td>
                    <td><input type="text" name="new_experience_title"></td>
                    <td><textarea name="new_experience_details" rows="2"></textarea></td>
                    <td>
                        <button type="submit" name="add_experience">Add</button>
                    </td>
                </form>
            </tr>
        </table>
    </div>

    <div class="projects">
        <h2>Projects</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Details</th>
                <th>Link</th>
                <th>Image</th>
                <th>Used Language</th>
                <th>Actions</th>
            </tr>
            <?php while ($projectsRow = mysqli_fetch_assoc($projectsResult)) { ?>
                <tr>
                    <form method="POST" action="">
                        <td><input type="text" name="project_title" value="<?php echo $projectsRow['pname']; ?>"></td>
                        <td><textarea name="project_description" rows="2"><?php echo $projectsRow['details']; ?></textarea></td>
                        <td><input type="text" name="project_url" value="<?php echo $projectsRow['plink']; ?>"></td>
                        <td><input type="text" name="project_pimg" value="<?php echo $projectsRow['pimg']; ?>"></td>
                        <td><input type="text" name="project_ul" value="<?php echo $projectsRow['ul']; ?>"></td>
                        <td>
                            <input type="hidden" name="project_id" value="<?php echo $projectsRow['id']; ?>">
                            <button type="submit" name="updateProject">Update</button>
                            <button type="submit" name="deleteProject">Delete</button>
                        </td>
                    </form>
                </tr>
            <?php } ?>
            <tr>
                <th colspan="5">Add New Project</th>
            </tr>
            <tr>
                <form method="POST" action="">
                    <td><input type="text" name="new_project_title"></td>
                    <td><textarea name="new_project_description" rows="2"></textarea></td>
                    <td><input type="text" name="new_project_url"></td>
                    <td><input type="text" name="new_project_img"></td>
                    <td><input type="text" name="new_project_ul"></td>
                    <td>
                        <button type="submit" name="addProject">Add</button>
                    </td>
                </form>
            </tr>
        </table>      
    </div>

    <div class="contact">
        <h2>Contact Messages</h2>
        <div class="container">
            <?php
            if ($contactResult->num_rows > 0) {
                while ($row = $contactResult->fetch_assoc()) {
                    echo "<div class='card'>
                    <p>Name: {$row['name']}</p>
                    <p>Email: {$row['email']}</p>
                    <h3>Message: {$row['message']}</h3>
                    <a href='admin_dashboard.php?delete={$row['id']}'>Delete</a>
                  </div>";
                }
            } else {
                echo "0 Messages";
            }
            ?>
        </div>
    </div>
    <div class="logout">
        <button><a href="adminlogout.php">Log out</a></button>
    </div>
</body>
</html>