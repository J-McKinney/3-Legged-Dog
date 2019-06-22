const even = [4, 6, 8, 12, 14, 16, 18, 20];
const odd = [3, 7, 9, 11, 13, 15, 17, 19];
//Numbers 1, 2, 5, 10 numbers, lets make it tough
let xtra = [];
var bldgNum = 0;
var wins = 0;
var losses = 0;
var compNum;
//the arrays that the stones choose from// global variables/////////////
/////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
   compNum = Math.floor(Math.random() * 182) + 19;
   console.log(compNum);
   $("#matchNum").html("Thanos: " + compNum);
   //Thanos picks a number between 19 and 200, that number is sent to id=matchNum
   document.getElementById("gauntlet").style.cssText = "display: block";
   document.getElementById("winner").style.cssText = "display: none";
   document.getElementById("loser").style.cssText = "display: none";

   let spcStn = even[Math.floor(Math.random() * even.length)];
   console.log("SpaceStone: " + spcStn);
   $("spcStn").html(spcStn);
   //User picks the space stone with an unknown number??? it is sent to that infinity stone pic

   let mndStn = odd[Math.floor(Math.random() * odd.length)];
   console.log("MindStone: " + mndStn);
   $("spcStn").html(mndStn);
   //User picks the mind stone with an unknown number??? it is sent to that infinity stone pic


   let rltyStn = even[Math.floor(Math.random() * even.length)];
   console.log("RealityStone: " + rltyStn);
   $("spcStn").html(rltyStn);
   //User picks the reality stone with an unknown number??? it is sent to that infinity stone pic


   let pwrStn = odd[Math.floor(Math.random() * odd.length)];
   console.log("PowerStone: " + pwrStn);
   $("spcStn").html(pwrStn);
   //User picks the power stone with an unknown number??? it is sent to that infinity stone pic


   let timStn = even[Math.floor(Math.random() * even.length)];
   console.log("TimeStone: " + timStn);
   $("spcStn").html(timStn);
   //User picks the time stone with an unknown number??? it is sent to that infinity stone pic


   let solStn = odd[Math.floor(Math.random() * odd.length)];
   console.log("SoulStone: " + solStn);
   $("spcStn").html(solStn);
   //User picks the soul stone with an unknown number??? it is sent to that infinity stone pic
   /////////////////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////////////////
   function reset() {
      compNum = Math.floor(Math.random() * 182) + 19;
      console.log(compNum);
      $("#matchNum").html(compNum);
      //computer picks a number between 19 and 200, that number is sent to id=matchNum
      document.getElementById("gauntlet").style.cssText = "display: block";
      document.getElementById("winner").style.cssText = "display: none";
      document.getElementById("loser").style.cssText = "display: none";


      let spcStn = even[Math.floor(Math.random() * even.length)];
      console.log("SpaceStone: " + spcStn);
      $("spcStn").html(spcStn);
      //User picks the space stone with an unknown number??? it is sent to that infinity stone pic

      let mndStn = odd[Math.floor(Math.random() * odd.length)];
      console.log("MindStone: " + mndStn);
      $("spcStn").html(mndStn);
      //User picks the mind stone with an unknown number??? it is sent to that infinity stone pic


      let rltyStn = even[Math.floor(Math.random() * even.length)];
      console.log("RealityStone: " + rltyStn);
      $("spcStn").html(rltyStn);
      //User picks the reality stone with an unknown number??? it is sent to that infinity stone pic


      let pwrStn = odd[Math.floor(Math.random() * odd.length)];
      console.log("PowerStone: " + pwrStn);
      $("spcStn").html(pwrStn);
      //User picks the power stone with an unknown number??? it is sent to that infinity stone pic


      let timStn = even[Math.floor(Math.random() * even.length)];
      console.log("TimeStone: " + timStn);
      $("spcStn").html(timStn);
      //User picks the time stone with an unknown number??? it is sent to that infinity stone pic


      let solStn = odd[Math.floor(Math.random() * odd.length)];
      console.log("SoulStone: " + solStn);
      $("spcStn").html(solStn);
      //User picks the soul stone with an unknown number??? it is sent to that infinity stone pic

      bldgNum = 0;
      $("#bldgNum").html(bldgNum);
   }
   ////////////////////////////////////////////////////////////////////////////////////////////////////////
   function win() {
      wins++;
      $("#wins").html(wins);
      alert("You Win!!!");
      document.getElementById("gauntlet").style.cssText = "display: none";
      document.getElementById("winner").style.cssText = "display: block";
      document.getElementById("loser").style.cssText = "display: none";
      reset();
   }
   function lose() {
      losses++;
      alert("You lose!!!");
      document.getElementById("gauntlet").style.cssText = "display: none";
      document.getElementById("winner").style.cssText = "display: none";
      document.getElementById("loser").style.cssText = "display: block";
      reset();
   }
   //////////////////////////////////////////////////////////////////////////////////////////////////
   $("#spcStn").on("click", function () {
      bldgNum += spcStn;
      $("#bldgNum").html(bldgNum);
      if (bldgNum == compNum) {
         win();
      } else if (bldgNum > compNum) {
         lose();
      }
   })
   //space stone has a value assigned from the array it will add to the bldgNum
   //////////////////////////////////////////////////////////////////////////////////////////////////////

   $("#mndStn").on("click", function () {
      bldgNum += mndStn;
      $("#bldgNum").html(bldgNum);
      if (bldgNum == compNum) {
         win();
      } else if (bldgNum > compNum) {
         lose();
      }
   })
   //mind stone has a value assigned from the array it will add to the bldgNum
   ////////////////////////////////////////////////////////////////////////////////////////////////

   $("#rltyStn").on("click", function () {
      bldgNum += rltyStn;
      $("#bldgNum").html(bldgNum);
      if (bldgNum == compNum) {
         win();
      } else if (bldgNum > compNum) {
         lose();
      }
   })
   //reality stone has a value assigned from the array it will add to the bldgNum
   /////////////////////////////////////////////////////////////////////////////////////////////////////

   $("#pwrStn").on("click", function () {
      bldgNum += pwrStn;
      $("#bldgNum").html(bldgNum);
      if (bldgNum == compNum) {
         win();
      } else if (bldgNum > compNum) {
         lose();
      }
   })
   //power stone has a value assigned from the array it will add to the bldgNum
   //////////////////////////////////////////////////////////////////////////////////////////////////////
   $("#timStn").on("click", function () {
      bldgNum += timStn;
      $("#bldgNum").html(bldgNum);
      if (bldgNum == compNum) {
         win();
      } else if (bldgNum > compNum) {
         lose();
      }
   })
   //time stone has a value assigned from the array it will add to the bldgNum
   //////////////////////////////////////////////////////////////////////////////////////////////////////
   $("#solStn").on("click", function () {
      bldgNum += solStn;
      $("#bldgNum").html(bldgNum);
      if (bldgNum == compNum) {
         win();
      } else if (bldgNum > compNum) {
         lose();
      }
   })
   //soul stone has a value assigned from the array it will add to the bldgNum
   //////////////////////////////////////////////////////////////////////////////////////////////////////

});