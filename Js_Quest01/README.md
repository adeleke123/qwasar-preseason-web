## Js Quest01

Remember to git add && git commit && git push each exercise!

We will execute your function with our test(s), please DO NOT PROVIDE ANY TEST(S) in your file

For each exercise, you will have to create a folder and in this folder, you will have additional files that contain your work.

Folder names are provided at the beginning of each exercise under `submit directory` and specific file names for each exercise are also provided at the beginning of each exercise under `submit file(s)`.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Introduction

Studies show that the best way to learn is through immersion.

Starting now, we will consider you a Junior Web developer. Congratulations! :-)

Time to work!

We will start our first job to get familiar with `web technologies`. HTML!

Before we begin, let's refresh our memory about web servers. In order to access a webpage, we need to have a web server to `serve` it.


![web_server_schema](https://user-images.githubusercontent.com/51156057/207979802-6cf0adb3-6eca-4010-b410-193eda08fa13.png)


This means for our following assignment we will need a web server too. Luckily we have one, follow the instructions from `Static Html Page Renderer Section`.

This is exciting, let's do some html / css / and javascript! :)

| Js Quest01 | My First Webpage |
| ---------- | ---------------- |
| Submit directory | ex00 |
| `Submit file` | `index.html` |

## Description

Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img /> and <input /> directly introduce content into the page. Other tags such as <p> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.

You will need to
Create an index.html file with a h1 tag saying "Hello World".

To display your page you will need a `static html page renderer` (see annex at the bottom).


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Js Quest01 | My Html Journey Change Box Color |
| ---------- | -------------------------------- |
| Submit directory | ex01 |
| `Submit file` | `index.html` |

## Description

One of the successes of html and css are their customization options, allowing you to free your creative mind. :-)

Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.

A little of history:
Web colors are colors used in displaying web pages on the World Wide Web, and the methods for describing and specifying those colors. Colors may be specified as an RGB triplet or in hexadecimal format (a hex triplet) or according to their common English names in some cases. A color tool or other graphics software is often used to generate color values. In some uses, hexadecimal color codes are specified with notation using a leading number sign (#). A color is specified according to the intensity of its red, green and blue components, each represented by eight bits. Thus, there are 24 bits used to specify a web color within the sRGB gamut, and 16,777,216 colors that may be so specified.

The first versions of Mosaic and Netscape Navigator used the X11 color names as the basis for their color lists, as both started as X Window System applications. Web colors have an unambiguous colorimetric definition, sRGB, which relates the chromaticities of a particular phosphor set, a given transfer curve, adaptive whitepoint, and viewing conditions.[4] These have been chosen to be similar to many real-world monitors and viewing conditions, in order to allow rendering to be fairly close to the specified values even without color management. User agents vary in the fidelity with which they represent the specified colors. More advanced user agents use color management to provide better color fidelity; this is particularly important for Web-to-print applications.

Let's talk about our assignment:

Create an index.html file with this content:

```
<!DOCTYPE html>
<html>
    <body>
      <div id="my_box" style="height: 200px; width: 200px; border: solid 1px black">
        Box
      </div>
    </body>
</html>

```
You will modify this page so the div box has a red (#FF0000) background.

To display your page you will need a `static html page renderer` (see annex at the bottom).

Tip
Google access browser debugger console

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Js Quest01 | My Html Journey Table |
| ---------- | --------------------- |
| Submit directory | ex02 |
| `Submit file` | `index.html` |

## Description

Table tag is a must-know when doing HTML.

Where do HTML tables come from?
The first proposal for HTML tables that I have a record of was documented by Dave Raggett late in 1993, based on discussions in earlier months. It proposed mark-up to layout potentially complex material in rows & columns on a display. The proposal was concerned with the layout to be achieved, and not to do with any logical or semantic relationships among the material.

Viola may have been the first browser to support some form of tables for demonstration purposes. But, as far as I know, tables first appeared as generally-available technology on the web late in 1994 in a development version of Mosaic. This was therefore both a "specification" & a "visual formatting model" wrapped up in a piece of technology. I don't know what those browser developers thought tables would be used for. But I don't recall their protests when layout-tables "took off" in about 1995/6 and made the web a much more interesting and useful system!

HTML tables have never been purely layout-neutral logical or semantic mark-up. Tables have always been in terms of rows and columns, and have never insisted that the rows and columns comprise logical or semantic dimensions. Specifications have always permitted complex material to be enclosed in the cells. The W3C HTML recommendations for tables include their visual formatting model. However, later recommendations include optional features to enable semantic relationships to be added for use by accessibility technology.

Let's talk about our assignment:

Create an index.html file with this content:
```
<!DOCTYPE html>
<html>
    <body>
      <table id="my_table">
          <tr>
              <th>Facts</th>
          </tr>
          <tr>
              <td>XXXX</td>
          </tr>
          <tr>
              <td>XXXX</td>
          </tr>
      </table>
    </body>
</html>

```
You will modify this page in order to display all the following Facts:
```
Earth is round
The hashtag symbol is technically called an octothorpe
Some cats are allergic to people
The unicorn is the national animal of Scotland
The odds of getting a royal flush are exactly 1 in 649,740

```
To display your page you will need a static html page renderer (see annex at the bottom).

Tip
Google access browser debugger console

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Js Quest01 | My Html Journey Variable Integer |
| ---------- | -------------------------------- |
| Submit directory | ex03 |
| `Submit file` | `index.html` |

## Description

The first part of coding is to create a variable. Let's get started with an integer variable.
What does an `integer variable` mean?

In most languages different "types" are defined.
What is a type?

A good example is that a letter is different than a number.

We will start with numbers.

Before starting to `code`, we need to visit another notion: `scrip`t tag.
In html, `Javascript` code must be place inside `script` tag. You will see in the code below
`<script>`, it's the only place where code are `interpreted`.

Enough talking!

Complete the following code. Create a variable named: `age` with value `34`.
```
age = xxxxxx;

```
Let's talk about our assignment:

Create an index.html file with this content:
```
<!DOCTYPE html>
<html>
    <body>
    </body>
    <script>
      // Put your variable here
    </script>
</html>

```
To display your page you will need a `static html page renderer` (see annex at the bottom).

Tip
Google access browser debugger console

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

| Js Quest01 | My Html Journey Debugging |
| ---------- | ------------------------- |
| Submit directory | ex04 |
| `Submit file` | `index.html` |

## Description

On our coding journey, one of the most useful skills we will have to practice is `debugging`.

What is debugging?

Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.

Debugging tactics can involve interactive debugging, control flow analysis, unit testing, integration testing, log file analysis, monitoring at the application or system level, memory dumps, and profiling.

It's a funny term, maybe a little history will enlighten us:
The terms "bug" and "debugging" are popularly attributed to Admiral Grace Hopper in the 1940s. While she was working on a Mark II computer at Harvard University, her associates discovered a moth stuck in a relay and thereby impeding operation, whereupon she remarked that they were "debugging" the system. However, the term "bug", in the sense of "technical error", dates back at least to 1878 and Thomas Edison (see software bug for a full discussion). Similarly, the term "debugging" seems to have been used as a term in aeronautics before entering the world of computers. Indeed, in an interview Grace Hopper remarked that she was not coining the term.[citation needed] The moth fit the already existing terminology, so it was saved. A letter from J. Robert Oppenheimer (director of the WWII atomic bomb "Manhattan" project at Los Alamos, NM) used the term in a letter to Dr. Ernest Lawrence at UC Berkeley, dated October 27, 1944, regarding the recruitment of additional technical staff.

The Oxford English Dictionary entry for "debug" quotes the term "debugging" used in reference to airplane engine testing in a 1945 article in the Journal of the Royal Aeronautical Society. An article in "Airforce" (June 1945 p. 50) also refers to debugging, this time of aircraft cameras. Hopper's bug was found on September 9, 1947. Computer programmers did not adopt the term until the early 1950s. The seminal article by Gill in 1951 is the earliest in-depth discussion of programming errors, but it does not use the term "bug" or "debugging". In the ACM's digital library, the term "debugging" is first used in three papers from 1952 ACM National Meetings. Two of the three use the term in quotation marks. By 1963 "debugging" was a common-enough term to be mentioned in passing without explanation on page 1 of the CTSS manual.

This is an abstract concept, technically if we have to translate: it's printing what our code is doing to understand WHY it's not doing what we want it to do.

Our assignment is:
First step into debugging is `printing`, let's print something in `Javascript`

Create an index.html with a script tag.
This script tag will have a script tag which will execute a console.log("My first print");

To display your page you will need a `static html page renderer` (see annex at the bottom).

Tip
Google access browser debugger console

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Annex: Static Html Page Renderer
How to have a `static html page renderer` inside Docode:

0# Open your HTML file:

<img width="1395" alt="docode_web_mini_browser_1" src="https://user-images.githubusercontent.com/51156057/207988617-a2594cbb-af5f-484e-adc3-b5249fcd05c4.png">

1# Click on the web preview button:
<img width="1397" alt="docode_web_mini_browser_2" src="https://user-images.githubusercontent.com/51156057/207988743-2b049cc3-bbc3-45ea-aadd-96c5b1bda584.png">

2# You can preview your html:
<img width="1396" alt="docode_web_mini_browser_3" src="https://user-images.githubusercontent.com/51156057/207988895-9891cbcd-5c4d-41b5-b721-2573be177cc7.png">
