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
