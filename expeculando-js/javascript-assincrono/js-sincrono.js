const BASE_URL = "https://thatcopy.pw/catapi/rest/"
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");


const getCat = async() => {
   try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

    return json.webpurl;
       
   } catch (error) {
        console.log(error.message);          
   }
}

const loadImg = async () => {
    catImg.src = await getCat();
}

catBtn.addEventListener("click", loadImg);
loadImg;