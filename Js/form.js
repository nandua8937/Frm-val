function formval()
{
   var username=document.frmval.un.value;
   var password=document.frmval.pas.value;
   var cpassword=document.frmval.cp.value;	
   var email=document.frmval.ea.value;
   var phone=document.frmval.mp.value;				
   if(username=="" || password=="" || email=="" ||phone=="" ||cpassword=="")
   {
       alert("Blank space is not allowed");
       return false;
   }
   else if(password.length<8)
   {
       alert("Password must be 8 character long");
       return false;
   }
   else if(cpassword.length<8)
   {
       alert("Password must be 8 character long");
       return false;
   }
   else if(password!=cpassword)
   {
       alert("Password mismatch");
       return false;
   }
   else
   {
   return true;
   }
}
function unval(x)
{
   if(x.value=='')
   {
       alert("Enter Your User Name");
       return false;
   }
}
function eaval(x)
{
   var eaf=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(x.value=='')
   {
       alert("Enter Your Email Address")
       return false;
   }
   if(x.value.match(eaf))
   {
       return true;
   }
   else
   {
       alert("Invalid Email Address")
       return false;
   }
}
function pasval(x)
{
   var pasf=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   if(x.value=='')
   {
       alert("Enter Your Password")
       return false;
   }
   if(x.value.match(pasf))
   {
       return true;
   }
   else
   {
       alert("Invalid Password")
       return false;
   }
}
function cpval(x)
{
   if(x.value=='')
   {
       alert("Enter Your Password Again")
       return false;
   }
}
function mpval(x)
{
   if(x.value=='')
   {
       alert("Enter Your Mobile Number")
       return false;
   }
   if(x.value.length<10||x.value.length>10)
   {
       alert("Invalid Phone Number")
       return false;
   }
}
function addval(x)
{
   if(x.value=='')
   {
       alert("Enter Your Address")
       return false;
   }
}