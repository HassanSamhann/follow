 
// define years and months 
let ye2023ar = document.getElementById("ye2023ar"); 
let January = document.getElementById("January"); 
let Februay = document.getElementById("Februay"); 
let March = document.getElementById("March"); 
let April = document.getElementById("April"); 
let May = document.getElementById("May"); 
let June = document.getElementById("June"); 
let July = document.getElementById("July"); 
let August = document.getElementById("August"); 
let September = document.getElementById("September"); 
let octobr = document.getElementById("octobr"); 
let November = document.getElementById("November"); 
let December = document.getElementById("December"); 
var buttom= document.getElementById("mainbot");

//define months of filter 
let Janu3ry = document.querySelectorAll(".Janu3ry");  
let Febru3y = document.querySelectorAll(".Febru3y");  
let M3rch = document.querySelectorAll(".M3rch");  
let Apr3l = document.querySelectorAll(".Apr3l");  
let M3y = document.querySelectorAll(".M3y");  
let ju3n = document.querySelectorAll(".ju3n");
let J3ly = document.querySelectorAll(".J3ly");
let Aug3st = document.querySelectorAll(".Aug3st");  
let oct3br = document.querySelectorAll(".oct3br");  
let Sept3mber = document.querySelectorAll(".Sept3mber");  
let Nov3mber = document.querySelectorAll(".Nov3mber");  
let Dec3mber = document.querySelectorAll(".Dec3mber");  

// make cards filter 
buttom.onclick = function(){

if(ye2023ar.selected && January.selected){
    Janu3ry.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && Februay.selected){
    Febru3y.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && March.selected){
    M3rch.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && April.selected){
    Apr3l.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && May.selected){
    M3y.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && June.selected){
    ju3n.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && June.selected){
    J3ly.forEach(u => {
        u.style.display = "block" ; 
    })
}

if(ye2023ar.selected && August.selected){
    Aug3st.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && octobr.selected){
    oct3br.forEach(u => {
        u.style.display = "block" ; 
    })
}

if(ye2023ar.selected && September.selected){
    Sept3mber.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && November.selected){
    Nov3mber.forEach(u => {
        u.style.display = "block" ; 
    })
}
if(ye2023ar.selected && December.selected){
    Dec3mber.forEach(u => {
        u.style.display = "block" ; 
    })
}




}










// <!-- </div>
// <div class="section4">
//   <div class="rate">
//     <h2>تقييم موظفين ادارة التقييم والمتابعة والشبكة الوطنية</h2>
//     <!-- <select name="format" id="format">
//       <option >اختر السنه</option>
//       <option  id="ye2023ar" value="ye2023ar">2023 </option>
//      </select> -->

//     <div class="select"> 
//       <select name="format" id="format">
//       <option >اختر السنه</option>
//       <option  id="ye2023ar" value="ye2023ar">2023 </option>
//      </select>
//      <select name="format" id="format">
//       <option >اختر الشهر</option>
//       <option  id="January" value="January">يناير</option>
//       <option  id="Februay" value="Februay">فبراير</option>
//       <option  id="March" value="March">مارس</option>
//       <option  id="April" value="April">أبريل</option>
//       <option  id="May" value="May">مايو</option>
//       <option  id="June" value="June">يونيو</option>
//       <option  id="July" value="July">يوليو</option>
//       <option  id="August" value="August">أغسطس</option>
//       <option  id="September" value="September">سبتمبر</option>
//       <option  id="octobr" value="octobr">اكتوبر</option>
//       <option  id="November" value="November">نوفمبر</option>
//       <option  id="December" value="December">ديسمبر</option>
//      </select>
//      <button type="submit" class="button" id="mainbot"> بحث  <i class="fas fa-search"></i>

//       </div>

//   </div>

//   <div class="section3">
// <div class="card ju3n hassan">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/img-mss/mss.jpg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/employes-photos/hassan-photo.jpeg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">hassan samhan</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 99% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 92% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>
// <div class="card ju3n ghada">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/ghada.jpeg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/ghada.jpeg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">ghada mohamed</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 86% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 80% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>
// <div class="card ju3n rasha">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/img-mss/mss.jpg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/employes-photos/girl.jpg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">rasha mohamed</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 86% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 81% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>
// <div class="card ju3n abdallah">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/img-mss/mss.jpg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/employes-photos/boy.jpg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">abdallah khaled</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 86% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 92% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>
// <div class="card ju3n osama">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/img-mss/mss.jpg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/employes-photos/boy.jpg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">osama nader</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 86% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 92% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>
// <div class="card ju3n reem">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/img-mss/mss.jpg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/employes-photos/girl.jpg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">reem mostafa</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 86% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 92% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>
// <div class="card ju3n azz">
//   <!-- Trigger the Modal -->
// <img class="myImg" src="img/img-mss/mss.jpg" alt="" width="300" height="200">

// <!-- The Modal -->

//   <div class="card-img">
//       <img src="img/employes-photos/boy.jpg">
//   </div>
//   <div class="desc">
//       <h6 class="primary-text">ezz eldein</h6>
//       <h6 class="secondary-text">ادارة التقييم والمتابعة والشبكة الوطنية</h6>
//   </div>
//   <div class="button1">
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
//     <i class="fa fa-star" aria-hidden="true"></i>
    

//   </div>


//   <div class="details">
//       <div class="rating">
//           <h6 class="primary-text"> 86% </h6>
//           <h6 class="secondary-text"> Rating </h6>
//       </div>
//       <div class="activity">
//           <h6 class="primary-text"> 92% </h6>
//           <h6 class="secondary-text"> Activity </h6>
//       </div>
      
//   </div>
  
// </div>

// </div> -->
