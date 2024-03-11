(async function main() {
	// const url = '../model/shizuku/shizuku.model.json';
    const url = '../model/shizuku/shizuku.model.json';
    const model = await PIXI.live2d.Live2DModel.from(url);
    const app = new PIXI.Application({
        view: document.getElementById('scene'),
        autoStart: true,
        // resizeTo: window,
        width: 360,
        height: 380,
        transparent: true,
        
    });
    app.stage.addChild(model);
    model.x = 10;
    model.y = 100;
    model.scale.set(0.25,0.25);
    model.anchor.set(0, 0.3);
    model.on('hit', hitAreas => {
        if (hitAreas.includes('body')) {
            model.motion('tap_body3');
            
        }
        else if (hitAreas.includes('mouth')) {

            model.motion('tap_mouth');
            
        }
        else if(hitAreas.includes('head')) {
            model.motion('happythings');
            
        }
    })
    // 胸针好漂亮啊
    document.getElementById("button1").onclick=function(){
        model.motion('flick_head');
    };
    // 大家继续努力吧
    document.getElementById("button2").onclick=function(){
        model.motion('pinch_in1');
    };
    // 两个错误
    document.getElementById("button3").onclick=function(){
        model.motion('pinch_out0');
    };

    // 你们真是太棒了！
    document.getElementById("button4").onclick=function(){
        // alert("1111");
        model.motion('tap_body1');


    };

    //请看演示视频
    document.getElementById("button5").onclick=function(){
        // alert("1111");
        model.motion('pinch_out2');        
        window.open('https://www.bilibili.com/video/BV1ve411j7k9?share_source=copy_web&vd_source=d879f1e179e30365697d74f1b817525f', 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
    };

    //自我介绍
    document.getElementById("button6").onclick=function(){
        // alert("1111");
        model.motion('pinch_introduce');        
    };

    //恭喜进入闯关
    document.getElementById("button11").onclick=function(){

        model.motion('pinch_congratulations');

    };
})();

function openFileIIs(){        
    try{ 
        var obj=new ActiveXObject("wscript.shell"); 
        if(obj){ 
            obj.Run("\""+filename+"\"", 1, false );
            //obj.run("osk");/*打开屏幕键盘*/
            //obj.Run('"'+filename+'"'); 
            obj=null; 
        } 
    }catch(e){ 
        alert("请确定是否存在该盘符或文件"); 
    } 
    
}