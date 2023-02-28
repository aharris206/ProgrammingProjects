# Programming Projects • `2023-02-27T22:45−08:00 (PST)`
## About Each Version in Version History

### Version 1.0.x

#### Version `1.0.0` was created in September 2020. 
- This was a copy of my previous clock I had made 2015, for the purpouses of this idea I that had. No additional work was dont on this version.

#### Version `1.0.1` was created one month later, in October of 2020. `2020-10-06T20:35−07:00 (PDT)`
- I had put the project aside for a month, then come back to it. In this version, I had worked out the coding end of representing the time in Dozenal *(base-12)*. I adapted my `function setBitMask(timeDigit)` to include the two extra digits, so that they would display.

#### Version `1.0.2` was completed a couple hours later, on the same nignt. `2020-10-06T22:19−07:00 (PDT)`
- After finishing version 1.0.1, I realized how much work it would be to actually create what I had invisioned *(with my own dozenal digits as LED)* . . . so  ***Instead*** I drew the digits in a photo editor and used that to display them . . . ***Really ugly*** . . .

### Version 2.0.x
- The reason ***why*** my invisioned display was *so difficult* to implement was due to how the HTML was srawing the digits. I was using `<div>`s and formatting them with CSS. While this worked out *somewhat* for a regular LED which is shaped *kind of* like a box, it immidately fell apart when trying to make more complex shapes *(in this case, a sexagon)*.
The only solution was to completely re-design the LEDs as `SVG paths`. This gives you the freedom of making any shape you could possibly imagine, but requires the time and attention to meticulously plot every single corner of every single LED . . . Otherwize, the LEDs can't fit together and, at best, end up looking really wierd . . .
- Using an svg editor *could* be useful in other applications, ***but*** for a programming project that needs *every single path* to be referancable by `id`, it really is only practical to create your own the long and hard way by drawing them out on plotting paper and understanding the geomatry of how they fit together, in order to get the points to plot out. 
- In the end, I used an excel sheet to find each coordinate.

#### Version `2.0.0` was created in December of 2022. `2022-12-23T16:20−08:00 (PST)`
- The orignal `v1.0.x` series ended up looking so ugly that I completely abandoned the idea. That is, until starting an online Bootcamp program through the [University of California, Davis](https://www.ucdavis.edu/) in where I began to return to the programming mind-set through Python. I mapped out how the SVG images should look, and began the slow and tedious process of plotting them pixal by pixal.
- In this version, you can see the new interface taking shape *(as explained above)*. The easiest way to go about it was to find the central pixal that each digit centered around, and drawing out the horizontal pixals that touched these center-points.

#### Version `2.0.1`. The Current Version `2022-12-25T23:56−08:00 (PST)`
- The HTML interface was completed around `2022-12-25T21:30−08:00 (PST)`, but the code had some bugs, being designed for the `1.0.x` LEDs. This actually took longer then expected to fix, but fortunatly the code was ironed out just in the nick of time to be finished on Christmas! (:
- The File you want to open is `indev.html`. 
- `for_phone.html` has the javascript and CSS in the HTML itself. The coding is less clean, but it allows for the file to be opened on a mobile browser without the need for other file paths.
- `tai.html` is the current [International Atomic Time](https://www.timeanddate.com/time/international-atomic-time.html). This is 37 seconds ahead of UTC / GMT at the time of writing this. This number increases with every [Leap Second](https://www.timeanddate.com/time/leapseconds.html), though, in reality, it is UTC / GMT that lags one second behind TAI with every [Leap Second](https://www.timeanddate.com/news/astronomy/end-of-leap-seconds-2022)

## The Improvement SVGs LEDs Adds
- SVG stands for ***Scalable*** *Vector Graphics*. This allows for adaptive web design, where the interface scales to the user's web browser. The 1.0.x series tried to do this as well, though you can see it's major limitations when scaling the browser page down. 
- The other nice thing about SVGs is that the image is not like other image types where pixals are defined, then resized. An SVG is basiclly a set of instructions telling the browser how to draw the image. While this makes them much harder to make from scratch, it allows for scalability with no loss in image quality. *In laymens terms, this clock can be viewed on a cellphone, or blown up on the massive moniors in Times Square and still maintain the same quality!*