function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    
    if (usuario=="admin" && password=="admin") { 
        window.location="perfil.php"; 
    } else if (usuario=="admin1" && password=="admin1") { 
        window.location="perfil.php"; 
    } else { 
        window.location="inicio-sesion.php";
        alert("Usuario o contraseña incorrecta"); 
    } 
} 

document.oncontextmenu = function(){return true} 