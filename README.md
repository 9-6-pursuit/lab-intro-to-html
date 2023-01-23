# HTML Introduction Lab

In this lab, you will have an opportunity to get familiar with some of the more common and basic tags of HTML.

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

### Question One

[Source: Wikiversity](https://en.wikiversity.org/wiki/Web_Design/HTML_Challenges)

Create a file named `sundial.html`.

In the file you are going to copy and paste the Sundial text below into your html file.

```html
Sundial From Wikipedia, the free encyclopedia. A sundial measures time by the
position of the sun. The most commonly seen designs, such as the 'ordinary' or
standard garden sundial, cast a shadow on a flat surface marked with the hours
of the day. As the position of the sun changes, the time indicated by the shadow
changes. However, sundials can be designed for any surface where a fixed object
casts a predictable shadow. Most sundial designs indicate apparent solar time.
Minor design variations can measure standard and daylight saving time, as well.
History Sundials in the form of obelisks (3500 BC) and shadow clocks (1500 BC)
are known from ancient Egypt, and were developed further by other cultures,
including the Chinese, Greek, and Roman cultures. A type of sundial without
gnomon is described in the old Old Testament (Isaiah 38:2). The mathematician
and astronomer Theodosius of Bithynia (ca. 160 BC-ca. 100 BC) is said to have
invented a universal sundial that could be used anywhere on Earth. The French
astronomer Oronce Fine constructed a sundial of ivory in 1524. The Italian
astronomer Giovanni Padovani published a treatise on the sundial in 1570, in
which he included instructions for the manufacture and laying out of mural
(vertical) and horizontal sundials. Giuseppe Biancani's Construction instrumenti
ad horologia solaria discusses how to make a perfect sundial, with accompanying
illustrations. Installation of standard sundials Many ornamental sundials are
designed to be used at 45 degrees north. By tilting such a sundial, it may be
installed so that it will keep time. However, some mass-produced garden sundials
are inaccurate because of poor design and cannot be corrected.
```

Now double click the file to open it in your browser and you'll see it doesn't look like the example image below. This is because you haven't added any HTML tags to your code, so the browser renders your text exactly as is.

[![Html challenge1.png](https://upload.wikimedia.org/wikiversity/en/3/3d/Html_challenge1.png)](https://en.wikiversity.org/wiki/File:Html_challenge1.png#/media/File:Html_challenge1.png)

_By Michael Nelson - screenshot on ubuntu linux, [CC BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5 "Creative Commons Attribution 2.5")_

Your challenge will be to add HTML tags to make your file look like the one in the image:

- headings (`<h1>`, `<h2>`, `<h3>` etc.)
- paragraphs (`<p>`)
- emphasis and strong (`<em>` and `<strong>`)

A web browser will display the `h1` heading very large, and the `h6` heading quite small, and all the other headings in between! But don't get into the habit of selecting an `h4` heading just because it's the size you want! You can always modify the size of your elements using your stylesheet (more on that later).

The key is to use the headings to structure your information in a useful (and meaningful) way! For example, every page should only ever have one main heading - your `h1` heading. An `h2` heading should only ever be a sub-heading of your `h1` heading. Similarly, an `h3` heading should only ever be a sub-heading of an `h2` heading etc.

### Question Two

Make a file `recipe.html` that renders a recipe. It should look exactly to this:

![screenshot](./images/pbjImage.png)

Include the following:

1. A main heading. `<h1>`
2. A description. `<p>`
3. An unordered list of ingredients. `<ul>`
4. An ordered list of directions. `<ol>`
5. Add a link to a similar recipe somewhere online.
