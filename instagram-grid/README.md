### CSS grid

display: grid

##### grid-template-columns
fill up rows, grow in columns
- by pixel
- fr (fraction  unit) => grid-template-column: 1fr 1fr; // fill all container
- auto
- repeat  => grid-template-column: repeact(5, minmax(25px, 40px))
- minmax
- auto-fill
- auto-fit

##### grid-template-rows
fill up column, grow in rows

##### grid
shorthand row and column
- grid: ${grid-template-rows} / ${grid-template-columns}

Eg: grid: 1fr 2fr / 3fr 1fr;

##### justify-items
From which direction, how child will be rendered inside parent
- start
- stretch

##### align-items
How children items should be placed inside parent

##### place-items
Syntax is row/column direction

Eg: place-items: start end; // start of row, end of column

##### justify-content, align-content, place-content
