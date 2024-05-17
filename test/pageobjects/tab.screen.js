const Utils = require("./utils");

class tab extends Utils{
    
    async leaguetab(){
    const elem = await $('//android.widget.FrameLayout[@content-desc="Leagues"]/android.widget.FrameLayout/android.widget.ImageView');
    await this.waitToBeClickable(elem);
    return elem;   
    }
}

    module.exports = new tab();