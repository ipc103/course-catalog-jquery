<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flatiron Course Catalogue</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="scripts/app.js"></script>
</head>
<body>
  <h1 id="brand">Flatiron Oregon School</h1>
   <ul class="courses">
     <li class="course">
       Ruby
       <div class="details">Learn about Web development</div>
     </li>
     <li class="course">
       iOS
       <div class="details">Learn to make Mobile Apps</div>
     </li>
   </ul>
   <form action="">
     <div class='name '>
       <label for="name">Class Name</label>
       <input class='input input_name' type="text" name='course[name]'>
     </div>
     <div class='details'>
       <label for="details">Class Details</label>
       <input type="text" name='course[details]'>
     </div>
     <input type="submit">
   </form>
</body>
</html>