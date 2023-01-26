## My Moving Box Realtime

Remember to git add && git commit && git push each exercise!

We will execute your function with our test(s), please DO NOT PROVIDE ANY TEST(S) in your file

For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work. Folder names are provided at the beginning of each exercise under `submit directory` and specific file names for each exercise are also provided at the beginning of each exercise under `submit file(s)`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

| My Moving Box Realtime |    |
| ---------------------- | -- |
| Submit directory	| ex00 |
| `Submit file` | `index.html` |

## Description
Complete an index.html file with the missing javascript code in order to move the "div" with the id `my_box_realtime` to the coordinates of bottom: 0 and right 0. Moving the box must be smooth. This means you will update the position slowly: You can only change the position (vertically and horizontally) by 1 point every 0.5 seconds.

When we load your html page, we should see the box moving diagonally through the screen and it should take 35 seconds to reach its destination.

You cannot change the value of the html. Moving the box needs to be done using javascript.
```
$>cat index.html
<html>
    <div id="my_box_realtime" style= "background-color: red; position: absolute; right: 70; bottom: 70; min-width: 100px; min-height: 100px"></div>
    <script type="text/javascript">
      // YOUR CODE
    </script>
</html>
$>
```
To display your page you will need a `static html page renderer` (see annex at the bottom).

## Example:

![my_moving_box](https://user-images.githubusercontent.com/51156057/214904758-c14acd46-1769-4225-99e3-ed033d49916e.gif)


Tips
Google: Javascript document getElementById
Google: Javascript change css position
Google: Javascript setInterval
Make sure to not have: `<!DOCTYPE html>` at the top, it creates some incompatibility with gandalf

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Annex: Static Html Page Renderer
How to have a static html page renderer inside Docode:

0# Open your HTML file:

<img width="1395" alt="docode_web_mini_browser_1" src="https://user-images.githubusercontent.com/51156057/214905232-93dd5120-67a7-45a1-b460-99f0e9f06e7d.png">


1# Click on the web preview button:

<img width="1397" alt="docode_web_mini_browser_2" src="https://user-images.githubusercontent.com/51156057/214905437-62c3d87b-9908-4fa5-b8db-2c21a60cf638.png">

2# You can preview your html:

<img width="1396" alt="docode_web_mini_browser_3" src="https://user-images.githubusercontent.com/51156057/214905814-f7156068-fc0f-4868-93c4-39df442abf36.png">
