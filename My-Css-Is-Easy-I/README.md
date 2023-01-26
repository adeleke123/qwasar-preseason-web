## My Css Is Easy I
Remember to git add && git commit && git push each exercise!

We will execute your function with our test(s), please DO NOT PROVIDE ANY TEST(S) in your file

For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work. Folder names are provided at the beginning of each exercise under `submit directory`and specific file names for each exercise are also provided at the beginning of each exercise `under submit file(s)`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

| My Css Is Easy I |      |
| ---------------- | ---- |
| Submit directory  |   . |
| `Submit files` | `index.html - style.css` |

## Description
Create a html page (named: `index.html`) with a css style (named: `style.css`).

It is required to use `flexbox`. If you use `float`, this exercise will be considered as failed.

Flexbox is very powerful in order to align `responsively` elements.

Your web page will be `responsive`, which means your page will handle a `mobile` view and a desktop `view`.

## Mobile view:

```
----------
| HEADER |
----------
|  HERO  |
----------
| CONTENT|
----------
| SIDEBAR|
----------
| FOOTER |
----------
```
## Desktop view:

```
---------------------
|       HEADER      |
---------------------
|        HERO       |
---------------------
| CONTENT | SIDEBAR |
---------------------
|       FOOTER      |
---------------------
```

## Example:
![css_is_easy](https://user-images.githubusercontent.com/51156057/214919611-5da9c85f-4b26-47f0-8512-85f1f919d173.gif)

Each section will have their names displayed (ex: in the header component you will have the word `header`, hero for hero, etc.)
Use some padding to make it smooth.
Header will have a background color: 00B7EB
Hero will have a background color: FF0000
Content will have a background color: 00FF00
Sidebar will have a background color: 800080
Footer will have a background color: 444444
Mobile view is defined as a screen width less than 640px

Desktop view is defined as a screen width bigger than 640px

Some browsers create a `margin` inside the `body tag`.
To get rid of it:
```
body {
    margin: 0px !important;
}
```
Gandalf is not a big fan of margins.
Gandalf is not a big fan of HTML5 (`header/section/footer` will be replaced by the tag `div`.)
Gandalf will not find sections if they are not properly named and it will display an error about timeout.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Annex: Static Html Page Renderer
How to have a `static html page renderer` inside Docode:

0# Open your HTML file:
<img width="1395" alt="docode_web_mini_browser_1 (1)" src="https://user-images.githubusercontent.com/51156057/214920503-21f6ede7-a4a8-44e5-b0a5-8116c1a843ac.png">

1# Click on the web preview button:
<img width="1397" alt="docode_web_mini_browser_2 (1)" src="https://user-images.githubusercontent.com/51156057/214920841-58c243cb-2431-4733-bb28-7199847d4d90.png">

2# You can preview your html:
<img width="1396" alt="docode_web_mini_browser_3 (1)" src="https://user-images.githubusercontent.com/51156057/214921001-a71a7dec-e303-4fcf-8959-6d99862466e8.png">
