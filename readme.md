```
npm i florida_man
```


# Example

```js

const {fman} = require("florida_man");

async function f_man(month,date){
    let a = await fman(month,date);
    console.log(a)

}
f_man("march","1")

/*
result: 

[
  'floridamanbirthday.org/wp-content/uploads/2021/06/florida-man-birthday-march-1-300x169.jpg',      
  'The man who dragged the shark behind his boat was sentenced to 10 days in prison.'
]
*/
```
