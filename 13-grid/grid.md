# Notes About CSS Grid Layout

## First things we saw

- To add a column in our grid layout we use <strong>grid-template-column</strong> and same for rows with <strong>grid-template-row</strong>. We can specify the number of columns and rows adding as a value of the property the width value of the columns twice as much columns we want, same for rows. It works like this: <strong>grid-template-row: 200px 200px 200px;</strong> for 3 rows of 200px width. <br>To avoid repeat those values, you can declare the property like this: <strong>grid-template-row: repeat(3, 200px);</strong>


- To position an element in our grid layout we must use <strong>grid-column-start</strong> and set a number to determinate where our column will start. Same behaviour for the <strong>grid-column-start</strong>, with the difference that this property determinate where the columns ends in our grid layout.

## Second things we saw

- To delimitate both, the minimum and maximum width or hight for an item in our grid layout, we can use the <strong>minmax()</strong> function. The first parameter refers to the minimum and the last one refers to the maximum value.

## Third things...

- Elements wich are not part of the document flow are not part of the Grid too. So fixed and absolute elements are not part of the grid.

- We can position our elements into the cells with <strong>align-items</strong> and <strong>justify-content</strong>, as <strong>justify-self</strong> and <strong>align-self</strong>.

- We can structure automatically our cells on the grid with <strong>auto-fill</strong> and <strong>auto-fit</strong> property.