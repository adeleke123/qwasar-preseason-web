## My Bouncing Box
Remember to git add && git commit && git push each exercise!

We will execute your function with our test(s), please DO NOT PROVIDE ANY TEST(S) in your file

For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work. Folder names are provided at the beginning of each exercise under `submit directory` and specific file names for each exercise are also provided at the beginning of each exercise under `submit file(s)`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

| My Bouncing Box |       |
| ----------------| ----- |
| Submit directory |	. |
| `Submit file` |	`index.html` |

## Description
Complete an index.html file with the missing javascript code in order to replicate the famous `Windows Screensaver - Bounce`

[Example - Video](https://www.youtube.com/watch?v=NVp6GMHpYvo)

You need to replace the content of the "div" `my_bouncing_box` with your Qwasar's login in downcase.

You need to move the "div" with the id `my_bouncing_box` diagonally.

We defined the (0, 0) coordinate (x, y) at the very top left of your screen.
The box must move diagonally and each time it reaches a border it will change direction of the border it touched.
If the box is moving bottom-right:
-- when it reaches the bottom border it will go top.
-- when it reaches the right border it will go left.

We let you choose the speed rate for the movement of the box. Between 0.3 and 1 second seems to be good values.

You cannot change the value of the html, moving the box needs to be done using javascript. (Yes, JQuery is not allowed yet.)

$>cat index.html
<html style='background-color: black'>
  <div id="my_bouncing_box" style= "background-color: blue; border-radius: 3px; position: absolute; left: 0px; top: 0px; min-width: 100px; min-height: 100px; text-align: center; font-weight: bold; color: #999;" >Not loaded</div>
  <script type="text/javascript">
    // YOUR CODE
  </script>
</html>
$>
You don't have to handle any screen resizing.
Do NOT use canvas tag.

Gandalf is expecting 2 to 3 bounces in less than 40 secs. If you have an "infinity loop error," it might be that your box is not moving fast enough.

Example:


TIPS

Google Javascript document getElementById
Google Javascript setInterval
Google Javascript change style left
Google Javascript change style top
Annex: Static Html Page Renderer
How to have a static html page renderer inside Docode:

0# Open your HTML file:


1# Click on the web preview button:


2# You can preview your html:

