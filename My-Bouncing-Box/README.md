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
- when it reaches the bottom border it will go top.
- when it reaches the right border it will go left.

We let you choose the speed rate for the movement of the box. Between 0.3 and 1 second seems to be good values.

You cannot change the value of the html, moving the box needs to be done using javascript. (Yes, JQuery is not allowed yet.)
```
$>cat index.html
<html style='background-color: black'>
  <div id="my_bouncing_box" style= "background-color: blue; border-radius: 3px; position: absolute; left: 0px; top: 0px; min-width: 100px; min-height: 100px; text-align: center; font-weight: bold; color: #999;" >Not loaded</div>
  <script type="text/javascript">
    // YOUR CODE
  </script>
</html>
$>
```
You don't have to handle any screen resizing.
Do NOT use `canvas` tag.

Gandalf is expecting 2 to 3 bounces in less than 40 secs. If you have an "infinity loop error," it might be that your box is not moving fast enough.

## Example:
![bouncing_box](https://user-images.githubusercontent.com/51156057/215199272-5a3fd291-c382-4acc-881a-5e240ec4e035.gif)


TIPS

+ Google Javascript document getElementById
+ Google Javascript setInterval
+ Google Javascript change style left
+ Google Javascript change style top
Annex: Static Html Page Renderer
How to have a `static html page renderer` inside Docode:

0# Open your HTML file:
<img width="1395" alt="docode_web_mini_browser_1" src="https://user-images.githubusercontent.com/51156057/214905232-93dd5120-67a7-45a1-b460-99f0e9f06e7d.png">


1# Click on the web preview button:
<img width="1397" alt="docode_web_mini_browser_2" src="https://user-images.githubusercontent.com/51156057/214905437-62c3d87b-9908-4fa5-b8db-2c21a60cf638.png">

2# You can preview your html:

<img width="1396" alt="docode_web_mini_browser_3" src="https://user-images.githubusercontent.com/51156057/214905814-f7156068-fc0f-4868-93c4-39df442abf36.png">
