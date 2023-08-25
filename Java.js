const drop_btn = document.querySelector(".drop-btn span");
         const tooltip = document.querySelector(".tooltip");
         const menu_wrapper = document.querySelector(".wrapper");
         const menu_bar = document.querySelector(".menu-bar");
         const setting_drop = document.querySelector(".setting-drop");
         const help_drop = document.querySelector(".help-drop");
         const discord_drop = document.querySelector(".discord-drop");
         const bot_drop = document.querySelector(".bot-drop");
         const FritzBox_drop = document.querySelector(".FritzBox-drop");
         const setting_item = document.querySelector(".setting-item");
         const help_item = document.querySelector(".help-item");
         const discord_item = document.querySelector(".discord-item");
         const bot_item = document.querySelector(".bot-item");
         const FritzBox_item = document.querySelector(".FritzBox-item");
         const setting_btn = document.querySelector(".back-setting-btn");
         const help_btn = document.querySelector(".back-help-btn");
         const discord_btn = document.querySelector(".back-discord-btn");
         const bot_btn = document.querySelector(".back-bot-btn");
         const FritzBox_btn = document.querySelector(".back-FritzBox-btn");
           drop_btn.onclick = (()=>{
             menu_wrapper.classList.toggle("show");
             tooltip.classList.toggle("show");
           });
           setting_item.onclick = (()=>{
             menu_bar.style.marginLeft = "-400px";
             setTimeout(()=>{
               setting_drop.style.display = "block";
             }, 100);
           });
           help_item.onclick = (()=>{
             menu_bar.style.marginLeft = "-400px";
             setTimeout(()=>{
               help_drop.style.display = "block";
             }, 100);
           });
           discord_item.onclick = (()=>{
            menu_bar.style.marginLeft = "-400px";
            setTimeout(()=>{
              discord_drop.style.display = "block";
            }, 100);
          });
          bot_item.onclick = (()=>{
            menu_bar.style.marginLeft = "-800px";
            setTimeout(()=>{
              bot_drop.style.display = "block";
            }, 100);
          });
          FritzBox_item.onclick = (()=>{
            menu_bar.style.marginLeft = "-800px";
            setTimeout(()=>{
              FritzBox_drop.style.display = "block";
            }, 100);
          });
           setting_btn.onclick = (()=>{
             menu_bar.style.marginLeft = "0px";
             setting_drop.style.display = "none";
           });
           help_btn.onclick = (()=>{
             help_drop.style.display = "none";
             menu_bar.style.marginLeft = "0px";
           });
           discord_btn.onclick = (()=>{
            discord_drop.style.display = "none";
            menu_bar.style.marginLeft = "0px";
          });
          bot_btn.onclick = (()=>{
            bot_drop.style.display = "none";
            menu_bar.style.marginLeft = "-400px";
          });
          FritzBox_btn.onclick = (()=>{
            FritzBox_drop.style.display = "none";
            menu_bar.style.marginLeft = "-400px";
          });