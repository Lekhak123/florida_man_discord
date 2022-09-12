import got from 'got';


async function fman(month:string,date:string){

   
      date[0]==="0"?date=`${date[1]}`:date=date;
      let response=  await got(`https://floridamanbirthday.org/${month}-${date}`);

    var content:string = response.body;
    var image = content.match(/floridamanbirthday.org\/wp-content\/uploads\/\d+\/\d+\/\w+-\w+-\w+-\w+-\d+-\d+x\d+.jpg/m);
 
    let title= content.match(/<p><\w+>"?[a-zA-Z ,’\-!@#$%^&*;0-9]+.?"?<\/\w+><\/p>/gm);
    
    let headline:string|undefined= title?.toString()?.replace("<b>","");
    headline= headline?.replace(/<\/?\w+>/gm,"");
   // console.log(image+ " "+headline)
    let img:string|undefined=image?.toString();
    let head_line:string|undefined=headline;
    let a = [img,head_line]
    //console.log(a)
    return a;

   

}

export { fman };

