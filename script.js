const _0x223c8c=_0x2d62;(function(_0x5e0613,_0xf9dd6a){const _0xfb0f4f=_0x2d62,_0x223b38=_0x5e0613();while(!![]){try{const _0x50d453=-parseInt(_0xfb0f4f(0x205))/0x1+parseInt(_0xfb0f4f(0x1dd))/0x2+parseInt(_0xfb0f4f(0x218))/0x3*(-parseInt(_0xfb0f4f(0x23a))/0x4)+parseInt(_0xfb0f4f(0x212))/0x5*(-parseInt(_0xfb0f4f(0x1d5))/0x6)+parseInt(_0xfb0f4f(0x236))/0x7+-parseInt(_0xfb0f4f(0x22e))/0x8+parseInt(_0xfb0f4f(0x1e1))/0x9;if(_0x50d453===_0xf9dd6a)break;else _0x223b38['push'](_0x223b38['shift']());}catch(_0x1c7d59){_0x223b38['push'](_0x223b38['shift']());}}}(_0x5315,0xdf30e));const themeAudio=document[_0x223c8c(0x23e)](_0x223c8c(0x1e8)),desktop=document[_0x223c8c(0x23e)](_0x223c8c(0x1fc)),terminalContainer=document[_0x223c8c(0x23e)](_0x223c8c(0x1fa)),startButton=document['getElementById'](_0x223c8c(0x1d4)),minimizeButton=document['getElementById'](_0x223c8c(0x1f0)),maximizeButton=document['getElementById']('maximize'),closeButton=document['getElementById']('close'),aboutMe=document[_0x223c8c(0x23e)](_0x223c8c(0x1ea)),portfolio=document['getElementById']('portfolio'),contact=document['getElementById']('contact'),terminalContent=document[_0x223c8c(0x23e)]('terminal-content'),scrollbarThumb=document[_0x223c8c(0x23e)]('scrollbar-thumb'),scrollbar=document[_0x223c8c(0x224)](_0x223c8c(0x1d9));function randomStat(_0x5cfc90,_0x2358a0){const _0x5c2f27=_0x223c8c;let _0x2f6686=Math[_0x5c2f27(0x214)]()*(_0x2358a0-_0x5cfc90)+_0x5cfc90;return Math[_0x5c2f27(0x1f1)](_0x2f6686*0x64)/0x64;}const retroTerminalText=_0x223c8c(0x20c)+randomStat(0x5,0x64)+'%\x0aMemory\x20Usage...........'+randomStat(0x28,0x64)+_0x223c8c(0x234)+randomStat(0.2,0x14)+_0x223c8c(0x215)+Math['round'](randomStat(0x1e,0x46))+'°C\x0aNetwork\x20Speed.........'+Math[_0x223c8c(0x1f1)](randomStat(0x5,0x384)*0xa)/0xa+'Kbps\x0a\x0a>>>\x20WELCOME\x20TO\x20RETRO\x20TERMINAL\x20<<<\x20\x0a=================================\x0aClick\x20a\x20button\x20for\x20some\x20info\x20about\x20me.\x0a\x0a>>>\x20',aboutMeText=_0x223c8c(0x1de),portfolioText=_0x223c8c(0x201),contactText='[INFO]\x20Interested\x20in\x20contacting\x20me?\x0a\x0aconst\x20metadata\x20=\x20User.getMetadata();\x0ametadata.get(\x27Discord\x27)\x20>>\x20\x27promasterio\x27\x0ametadata.get(\x27Discord-Server\x27)\x20>>\x0a<url:https://discord.gg/hM4xmcQjSc>\x0a\x0a\x0a[INFO]\x20Interested\x20in\x20my\x20minecraft\x20network?\x0a\x0aconst\x20network\x20=\x20metadata.get(\x27MC-Network\x27);\x0anetwork.getName()\x20>>\x20\x27TensorByte\x20Network\x27\x0anetwork.getIP()\x20>>\x20\x27Tensorbyte.net\x27\x0anetwork.getDiscord()\x20>>\x0a<url:https://discord.gg/c6mVHAFD4x>\x0a<file:assets/logo.png>\x0a\x0a\x0a[INFO]\x20Thank\x20you\x20for\x20visiting\x20my\x20site\x20<3\x0a<file:assets/thanks.gif>\x0a\x0a>>>\x20';let isAudioPlaying=![],fadeTimeout=null,fadeState=null;startButton['addEventListener']('click',()=>{const _0x93ad08=_0x223c8c;playClickSound(),!isAudioPlaying&&(themeAudio['loop']=!![],themeAudio[_0x93ad08(0x1d6)]=0x1,themeAudio['play']()[_0x93ad08(0x22f)](_0x10743a=>{const _0x305a1a=_0x93ad08;console[_0x305a1a(0x245)]('Error\x20playing\x20audio:',_0x10743a);}),isAudioPlaying=!![]),desktop[_0x93ad08(0x231)][_0x93ad08(0x21e)]='none',terminalContainer[_0x93ad08(0x231)][_0x93ad08(0x21e)]=_0x93ad08(0x235),clearText(),typeLine(retroTerminalText,0x1);});const audio=document['getElementById'](_0x223c8c(0x1e8)),muteButton=document[_0x223c8c(0x23e)](_0x223c8c(0x1ec));function toggleMute(){const _0x175454=_0x223c8c;audio[_0x175454(0x202)]?(audio[_0x175454(0x20e)](),muteButton[_0x175454(0x1d7)]=_0x175454(0x207)):(audio['pause'](),muteButton[_0x175454(0x1d7)]=_0x175454(0x1d1));}function _0x2d62(_0x4cf5b0,_0x11bfbe){const _0x5315c5=_0x5315();return _0x2d62=function(_0x2d62e5,_0x1b079d){_0x2d62e5=_0x2d62e5-0x1cd;let _0x3452fd=_0x5315c5[_0x2d62e5];return _0x3452fd;},_0x2d62(_0x4cf5b0,_0x11bfbe);}muteButton['addEventListener']('click',toggleMute);function fadeOutAudio(_0x49890f,_0x42d2a2=0x3e8){const _0x18962c=_0x223c8c;if(fadeState===_0x18962c(0x20f))return;fadeState=_0x18962c(0x20f),clearTimeout(fadeTimeout);const _0x26c728=_0x49890f[_0x18962c(0x1d6)]/(_0x42d2a2/0x32),_0x52ab96=setInterval(()=>{const _0x1471a1=_0x18962c;_0x49890f[_0x1471a1(0x1d6)]=Math[_0x1471a1(0x1fb)](0x0,_0x49890f[_0x1471a1(0x1d6)]-_0x26c728),_0x49890f['volume']===0x0&&(clearInterval(_0x52ab96),_0x49890f[_0x1471a1(0x1f3)](),fadeState=null);},0x32);}function fadeInAudio(_0x39a283,_0x3fb19b=0x3e8){const _0x3e12f4=_0x223c8c;if(fadeState===_0x3e12f4(0x239))return;fadeState=_0x3e12f4(0x239),clearTimeout(fadeTimeout),_0x39a283[_0x3e12f4(0x20e)]()[_0x3e12f4(0x22f)](_0x342d8b=>console[_0x3e12f4(0x245)](_0x3e12f4(0x223),_0x342d8b));const _0x2982c0=0x1/(_0x3fb19b/0x32);_0x39a283[_0x3e12f4(0x1d6)]=0x0;const _0x3ea418=setInterval(()=>{const _0xaa9cc6=_0x3e12f4;_0x39a283['volume']=Math[_0xaa9cc6(0x1ce)](0x1,_0x39a283[_0xaa9cc6(0x1d6)]+_0x2982c0),_0x39a283[_0xaa9cc6(0x1d6)]===0x1&&(clearInterval(_0x3ea418),fadeState=null);},0x32);}function handleMediaPlayback(_0x329848){const _0x12d7b5=_0x223c8c;_0x329848[_0x12d7b5(0x217)](_0x12d7b5(0x20a),()=>{!themeAudio['paused']&&fadeOutAudio(themeAudio);}),_0x329848['addEventListener'](_0x12d7b5(0x1f3),()=>{clearTimeout(fadeTimeout),fadeTimeout=setTimeout(()=>{const _0x5e1957=_0x2d62,_0x228602=Array[_0x5e1957(0x1f9)](document[_0x5e1957(0x209)](_0x5e1957(0x219)))[_0x5e1957(0x237)](_0x378784=>_0x378784[_0x5e1957(0x202)]);_0x228602&&fadeInAudio(themeAudio);},0x12c);});}function _0x5315(){const _0x14f00a=['5zzGNFM','clickSound','random','%\x0aTemperature...........','audio','addEventListener','141069IKkLXF','audio,\x20video','\x22>Download\x20File</media>','controls','getAttribute','width','display','AUDIO','VIDEO','classList','webp','Error\x20resuming\x20audio:','querySelector','fullscreen','img','<media\x20type=\x22image\x22\x20src=\x22','add','childList','replace','includes','\x22></media>','left','2237232anWKBk','catch','appendChild','style','png','className','%\x0aDisk\x20Usage.............','flex','5755631PsFuzL','every','translateX(-50%)','fading-in','84lkIuei','<media\x20type=\x22link\x22\x20src=\x22','maxHeight','contains','getElementById','pop','\x22>Download\x20Local\x20File</media>','jpeg','innerHTML','<media','maxWidth','error','span','Removed\x20media\x20element:\x20','min','tagName','ogg','Unmute','click','transform','startButton','810270UWlJma','volume','textContent','removedNodes','.scrollbar','observe','createElement','type','1808372gBDaXm','<file:assets/Promasterio.png>\x0aUser.getName()\x20>>\x20\x27Promasterio\x27;\x0aUser.getGender()\x20>>\x20\x27Male\x27;\x0aUser.getAge()\x20>>\x2015;\x0aUser.getNationality()\x20>>\x20\x27Netherlands\x27;\x0aUser.getFavoriteGame()\x20>>\x20\x27Minecraft\x27;\x0a\x0aconst\x20Dev\x20=\x20User.asDeveloper();\x0aDev.getProgrammingLangs()\x20>>\x20\x27[Skript,\x20Java,\x20Python,\x20JavaScript]\x27;\x0aDev.getFavoriteLang()\x20>>\x20\x27Skript\x27;\x0a\x0aSkript.getKnowledge()\x20===\x20100%\x0aJava.getKnowledge()\x20===\x2065%\x0aPython.getKnowdlege()\x20===\x2030%\x0aJavaScript.getKnowledge()\x20===\x2010%\x0a\x0a>>>\x20','media-container','<media\x20type=\x22video\x22\x20src=\x22','15173280dUQcUb','<media\x20type=\x22audio\x22\x20src=\x22','_blank','forEach','log','link','video','themeAudio','300px','about-me','bmp','muteButton','length','webm','startsWith','minimize','round','wav','pause','parseFromString','mp4','split','</media>','100%','from','terminalContainer','max','desktop','src','remove','Image','firstChild','[INFO]\x20Oh\x20here\x27s\x20some\x20stuff\x20I\x20made\x0a[INFO]\x20It\x27s\x20all\x20minecraft\x20(using\x20Skript)\x0a\x0a[INFO]\x20Cinema\x20Skript\x20(using\x20maps):\x0a[INFO]\x20This\x20is\x20probably\x20the\x20most\x20fun\x20thing\x20I\x20made!\x0a<file:assets/cinema.mp4>\x0a\x0a\x0a[INFO]\x20Gun\x20with\x20smooth\x20recoil\x20(using\x20item\x20displays):\x0a[INFO]\x20The\x20following\x20video\x20doesn\x27t\x20use\x20a\x20texture\x20pack\x20:P\x0a[INFO]\x20The\x20smooth\x20recoil\x20took\x20ages\x20cause\x20minecraft\x0a[INFO]\x20Operates\x20at\x2020\x20GameTicks\x20per\x20second\x0a[INFO]\x20(Part\x20of\x20TensorByte\x20Network\x20-\x20Devasted)\x0a<file:assets/gun.mp4>\x0a\x0a[INFO]\x20Island\x20Generator\x20(partly\x20java\x20cause\x20of\x20lag):\x0a[INFO]\x20It\x20has\x20seed\x20and\x20island\x20size\x20input!\x0a[INFO]\x20Using\x20Simplex\x20algorithm.\x0a[INFO]\x20(Part\x20of\x20TensorByte\x20Network\x20-\x20Devasted)\x0a<file:assets/island1.png>\x0a\x0a[INFO]\x20Same\x20Size,\x20Different\x20Seed:\x0a<file:assets/island2.png>\x0a\x0a[INFO]\x20Big\x20Island\x20Render\x20(2048x2048):\x0a<file:assets/island3.png>\x0a\x0a\x0a[INFO]\x20Cape\x20+\x20Skin\x20Changer:\x0a[INFO]\x20Sadly\x20u\x20can\x27t\x20change\x20the\x20cape\x20server\x20side\x0a[INFO]\x20But\x20for\x20just\x20the\x20skin\x20its\x20possible!\x0a<file:assets/skin.png>\x0a\x0a\x0a[INFO]\x20Rust\x20Styled\x20Building\x20System:\x0a[INFO]\x20(Part\x20of\x20TensorByte\x20Network\x20-\x20Devasted)\x0a<file:assets/building1.png>\x0a<file:assets/building2.png>\x0a<file:assets/building3.png>\x0a\x0a[INFO]\x20It\x20also\x20has\x20physics\x20when\x20broken!\x0a<file:assets/physics.mp4>\x0a\x0a\x0a[INFO]\x20Main\x20Menu:\x0a[INFO]\x20Controllable\x20with\x20your\x20mouse\x0a[INFO]\x20(Part\x20of\x20TensorByte\x20Network\x20-\x20Devasted)\x0a<file:assets/mainmenu.mp4>\x0a\x0a>>>','paused','target','mp3','1095967WIzMPq','none','Mute','.output','querySelectorAll','playing','body','█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\x0a█\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SYSTEM\x20INITIALIZATION\x20SEQUENCE\x20\x20\x20\x20\x20\x20\x20\x20█\x0a█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█\x0a\x0a[BOOT]\x20Initializing\x20kernel...\x20[OK]\x0a[BOOT]\x20Checking\x20hardware\x20integrity...\x20[OK]\x0a[BOOT]\x20Verifying\x20cryptographic\x20signatures...\x20[OK]\x0a[BOOT]\x20Loading\x20drivers:\x0a\x20\x20\x20\x20\x20\x20>\x20Input\x20Devices...........Connected\x0a\x20\x20\x20\x20\x20\x20>\x20Graphics\x20Processor......Online\x0a\x20\x20\x20\x20\x20\x20>\x20Audio\x20Interface.........Operational\x0a[BOOT]\x20Allocating\x20memory\x20resources...\x20[OK]\x0a[BOOT]\x20Establishing\x20network\x20connection...\x20[OK]\x0a\x0a>>>\x20SYSTEM\x20DIAGNOSTICS\x20<<<\x20\x0a=============================\x0aCPU\x20Load...............','jpg','play','fading-out','toLowerCase','gif'];_0x5315=function(){return _0x14f00a;};return _0x5315();}const observer=new MutationObserver(_0x4a4365=>{const _0x54b3ce=_0x223c8c;for(const _0x54cda0 of _0x4a4365){_0x54cda0[_0x54b3ce(0x1dc)]===_0x54b3ce(0x229)&&(_0x54cda0['addedNodes'][_0x54b3ce(0x1e4)](_0x61330c=>{const _0x149766=_0x54b3ce;(_0x61330c[_0x149766(0x1cf)]===_0x149766(0x21f)||_0x61330c[_0x149766(0x1cf)]===_0x149766(0x220))&&handleMediaPlayback(_0x61330c);}),_0x54cda0[_0x54b3ce(0x1d8)][_0x54b3ce(0x1e4)](_0xa8430d=>{const _0x42fb6c=_0x54b3ce;(_0xa8430d[_0x42fb6c(0x1cf)]==='AUDIO'||_0xa8430d[_0x42fb6c(0x1cf)]===_0x42fb6c(0x220))&&console[_0x42fb6c(0x1e5)](_0x42fb6c(0x1cd)+_0xa8430d['tagName']);}));}});observer[_0x223c8c(0x1da)](document[_0x223c8c(0x20b)],{'childList':!![],'subtree':!![]});function playClickSound(){const _0x37967b=_0x223c8c,_0x3257a3=document[_0x37967b(0x23e)](_0x37967b(0x213));_0x3257a3['play']();}aboutMe[_0x223c8c(0x217)]('click',()=>{clearText(),typeLine(aboutMeText,0x19),playClickSound();}),portfolio[_0x223c8c(0x217)](_0x223c8c(0x1d2),()=>{clearText(),typeLine(portfolioText,0x19),playClickSound();}),contact['addEventListener'](_0x223c8c(0x1d2),()=>{clearText(),typeLine(contactText,0x19),playClickSound();}),maximizeButton['addEventListener'](_0x223c8c(0x1d2),()=>{const _0xac418=_0x223c8c;playClickSound(),terminalContainer[_0xac418(0x221)][_0xac418(0x23d)]('fullscreen')?(terminalContainer['classList'][_0xac418(0x1fe)]('fullscreen'),terminalContainer['style'][_0xac418(0x22d)]='50%',terminalContainer[_0xac418(0x231)][_0xac418(0x1d3)]=_0xac418(0x238)):(terminalContainer[_0xac418(0x221)][_0xac418(0x228)](_0xac418(0x225)),terminalContainer[_0xac418(0x231)][_0xac418(0x22d)]='0',terminalContainer['style'][_0xac418(0x1d3)]=_0xac418(0x206));}),minimizeButton[_0x223c8c(0x217)](_0x223c8c(0x1d2),()=>{const _0x2f92bf=_0x223c8c;terminalContainer[_0x2f92bf(0x231)]['display']='none',desktop[_0x2f92bf(0x231)][_0x2f92bf(0x21e)]='flex',clearText(),playClickSound();}),closeButton[_0x223c8c(0x217)](_0x223c8c(0x1d2),()=>{const _0x518eb7=_0x223c8c;terminalContainer['style']['display']=_0x518eb7(0x206),desktop[_0x518eb7(0x231)]['display']=_0x518eb7(0x235),clearText(),playClickSound();});function clearText(){const _0x3b95ab=_0x223c8c;document[_0x3b95ab(0x224)](_0x3b95ab(0x208))[_0x3b95ab(0x242)]='';}let typingTimeout;function typeLine(_0xddb484,_0x4a78a6){const _0x33a3c0=_0x223c8c,_0x574828=document[_0x33a3c0(0x224)](_0x33a3c0(0x208));clearTimeout(typingTimeout);function _0x50f50d(_0x4ce08b){const _0x5ac9cc=_0x33a3c0;return _0x4ce08b=_0x4ce08b['replace'](/<file:([^>]+)>/gi,(_0x79296,_0x2cfd99)=>{const _0x270be1=_0x2d62,_0x9b21b3=_0x2cfd99[_0x270be1(0x1f6)]('.')['pop']()[_0x270be1(0x210)]();if([_0x270be1(0x232),_0x270be1(0x20d),'jpeg',_0x270be1(0x211),_0x270be1(0x1eb),_0x270be1(0x222)][_0x270be1(0x22b)](_0x9b21b3))return _0x270be1(0x227)+_0x2cfd99+'\x22></media>';else{if([_0x270be1(0x1f5),_0x270be1(0x1ee),_0x270be1(0x1d0)][_0x270be1(0x22b)](_0x9b21b3))return _0x270be1(0x1e0)+_0x2cfd99+_0x270be1(0x22c);else return[_0x270be1(0x204),_0x270be1(0x1f2),'ogg'][_0x270be1(0x22b)](_0x9b21b3)?'<media\x20type=\x22audio\x22\x20src=\x22'+_0x2cfd99+_0x270be1(0x22c):_0x270be1(0x23b)+_0x2cfd99+_0x270be1(0x240);}}),_0x4ce08b=_0x4ce08b[_0x5ac9cc(0x22a)](/<urlFile:(https?:\/\/[^\s>]+)>/gi,(_0x5cd86e,_0x185432)=>{const _0x56d4c0=_0x5ac9cc,_0x12912e=_0x185432['split']('.')[_0x56d4c0(0x23f)]()[_0x56d4c0(0x210)]();if([_0x56d4c0(0x232),'jpg',_0x56d4c0(0x241),'gif',_0x56d4c0(0x1eb),_0x56d4c0(0x222)][_0x56d4c0(0x22b)](_0x12912e))return _0x56d4c0(0x227)+_0x185432+'\x22></media>';else{if(['mp4','webm',_0x56d4c0(0x1d0)][_0x56d4c0(0x22b)](_0x12912e))return _0x56d4c0(0x1e0)+_0x185432+_0x56d4c0(0x22c);else return[_0x56d4c0(0x204),_0x56d4c0(0x1f2),_0x56d4c0(0x1d0)]['includes'](_0x12912e)?_0x56d4c0(0x1e2)+_0x185432+_0x56d4c0(0x22c):_0x56d4c0(0x23b)+_0x185432+_0x56d4c0(0x21a);}}),_0x4ce08b=_0x4ce08b[_0x5ac9cc(0x22a)](/<url:(https?:\/\/[^\s<]+)>/gi,(_0x344b40,_0x1dced2)=>{const _0x5dbb0f=_0x5ac9cc;return _0x5dbb0f(0x23b)+_0x1dced2+'\x22>'+_0x1dced2+_0x5dbb0f(0x1f7);}),_0x4ce08b;}const _0x40d6a3=_0x50f50d(_0xddb484)[_0x33a3c0(0x1f6)](/(<media[^>]*>.*?<\/media>)/gi);let _0x4043ed=0x0;function _0x465f6b(_0x49980b){const _0x5c570a=_0x33a3c0,_0x500cec=new DOMParser(),_0x41b30f=_0x500cec[_0x5c570a(0x1f4)](_0x49980b,'text/html')[_0x5c570a(0x20b)][_0x5c570a(0x200)],_0x89f4bb=_0x41b30f[_0x5c570a(0x21c)]('type'),_0x3a7385=_0x41b30f[_0x5c570a(0x21c)](_0x5c570a(0x1fd));let _0x173df7;switch(_0x89f4bb){case'image':_0x173df7=document[_0x5c570a(0x1db)](_0x5c570a(0x226)),_0x173df7[_0x5c570a(0x1fd)]=_0x3a7385,_0x173df7['alt']=_0x5c570a(0x1ff),_0x173df7[_0x5c570a(0x231)][_0x5c570a(0x244)]=_0x5c570a(0x1f8),_0x173df7[_0x5c570a(0x231)]['maxHeight']=_0x5c570a(0x1e9);break;case _0x5c570a(0x1e7):_0x173df7=document['createElement'](_0x5c570a(0x1e7)),_0x173df7[_0x5c570a(0x1fd)]=_0x3a7385,_0x173df7[_0x5c570a(0x21b)]=!![],_0x173df7['style']['maxWidth']='100%',_0x173df7[_0x5c570a(0x231)][_0x5c570a(0x23c)]=_0x5c570a(0x1e9);break;case _0x5c570a(0x216):_0x173df7=document['createElement'](_0x5c570a(0x216)),_0x173df7[_0x5c570a(0x1fd)]=_0x3a7385,_0x173df7[_0x5c570a(0x21b)]=!![],_0x173df7[_0x5c570a(0x231)][_0x5c570a(0x21d)]='100%';break;case _0x5c570a(0x1e6):_0x173df7=document[_0x5c570a(0x1db)]('a'),_0x173df7['href']=_0x3a7385,_0x173df7[_0x5c570a(0x203)]=_0x5c570a(0x1e3),_0x173df7[_0x5c570a(0x1d7)]=_0x41b30f[_0x5c570a(0x1d7)]||'Download';break;}if(_0x173df7){const _0x37e980=document[_0x5c570a(0x1db)]('div');_0x37e980[_0x5c570a(0x233)]=_0x5c570a(0x1df),_0x37e980['appendChild'](_0x173df7),_0x574828[_0x5c570a(0x230)](_0x37e980);}}function _0xd769e7(){const _0x5400f1=_0x33a3c0;if(_0x4043ed<_0x40d6a3[_0x5400f1(0x1ed)]){const _0x3f02d9=_0x40d6a3[_0x4043ed];_0x4043ed++;if(_0x3f02d9[_0x5400f1(0x1ef)](_0x5400f1(0x243))&&_0x3f02d9['endsWith']('</media>'))_0x465f6b(_0x3f02d9),_0xd769e7();else{let _0x4afcce=0x0;const _0x1e8a42=document['createElement'](_0x5400f1(0x246));_0x574828['appendChild'](_0x1e8a42);function _0x2b1d5f(){const _0x3d726e=_0x5400f1;_0x4afcce<_0x3f02d9[_0x3d726e(0x1ed)]?(_0x1e8a42['textContent']+=_0x3f02d9[_0x4afcce],_0x4afcce++,typingTimeout=setTimeout(_0x2b1d5f,_0x4a78a6)):_0xd769e7();}_0x2b1d5f();}}}_0xd769e7();}
