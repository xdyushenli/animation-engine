import React from 'react';

const Pixi = ({}) => {
    return (
        <div></div>
    );
}

export default Pixi;

{/* <script type="text/javascript">
        // 键盘处理函数
        function keyboard(value) {
            let key = {};
            key.value = value;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;

            //The `downHandler`
            key.downHandler = event => {
                if (event.key === key.value) {
                    if (key.isUp && key.press) key.press();
                    key.isDown = true;
                    key.isUp = false;
                    event.preventDefault();
                }
            };

            //The `upHandler`
            key.upHandler = event => {
                if (event.key === key.value) {
                    if (key.isDown && key.release) key.release();
                    key.isDown = false;
                    key.isUp = true;
                    event.preventDefault();
                }
            };

            //Attach event listeners
            const downListener = key.downHandler.bind(key);
            const upListener = key.upHandler.bind(key);

            window.addEventListener(
                "keydown", downListener, false
            );
            window.addEventListener(
                "keyup", upListener, false
            );

            // Detach event listeners
            key.unsubscribe = () => {
                window.removeEventListener("keydown", downListener);
                window.removeEventListener("keyup", upListener);
            };

            return key;
        }
    </script>
    <script type="text/javascript">
        // 应用
        const Application = PIXI.Application;
        // 精灵
        const Sprite = PIXI.Sprite;
        // 加载器
        const loader = PIXI.Loader.shared;
        // 已加载的资源
        const resources = loader.resources;
        // 已加载的纹理
        const textureCache = PIXI.utils.TextureCache;
        // todo 这是啥
        const Container = PIXI.Container;
        // todo 这是啥
        const Rectangle = PIXI.Rectangle;

        // 创建应用
        const app = new Application({
            width: 256,
            height: 256,
            antialias: true,
            transparent: false,
            resolution: 1,
        });

        // 添加资源文件
        loader.add([
            "http://localhost:8002/cardback@3x.png",
            "http://localhost:8002/donutcard@3x.png",
            "http://localhost:8002/cakecard@3x.png",
            "http://localhost:8002/giftcard@3x.png",
            "http://localhost:8002/ballooncard@3x.png",
            "http://localhost:8002/candlecard@3x.png",
            "http://localhost:8002/starcard@3x.png",
            "http://localhost:8002/birthdayhatcard@3x.png",
            "http://localhost:8002/sugercard@3x.png",
        ])
            .load(() => {
                // 方向键
                const left = keyboard("ArrowLeft");
                const up = keyboard("ArrowUp");
                const right = keyboard("ArrowRight");
                const down = keyboard("ArrowDown");

                // 牌背面
                const cardback = new Sprite(
                    resources["http://localhost:8002/cardback@3x.png"].texture
                );
                cardback.y = 96; 
                cardback.vx = 0;
                cardback.vy = 0;

                // 设置位置 & 尺寸
                cardback.position.set(96, 96);
                cardback.width = 50;
                cardback.height = 50;

                //Left
                left.press = () => {
                    cardback.vx = -5;
                    cardback.vy = 0;
                };
                left.release = () => {
                    if (!right.isDown && cardback.vy === 0) {
                        cardback.vx = 0;
                    }
                };

                //Up
                up.press = () => {
                    cardback.vy = -5;
                    cardback.vx = 0;
                };
                up.release = () => {
                    if (!down.isDown && cardback.vx === 0) {
                        cardback.vy = 0;
                    }
                };

                //Right
                right.press = () => {
                    cardback.vx = 5;
                    cardback.vy = 0;
                };
                right.release = () => {
                    if (!left.isDown && cardback.vy === 0) {
                        cardback.vx = 0;
                    }
                };

                //Down
                down.press = () => {
                    cardback.vy = 5;
                    cardback.vx = 0;
                };
                down.release = () => {
                    if (!up.isDown && cardback.vx === 0) {
                        cardback.vy = 0;
                    }
                };

                // 帧函数
                const tick = () => {
                    cardback.x += cardback.vx;
                    cardback.y += cardback.vy;
                }

                app.ticker.add(tick);

                app.stage.addChild(cardback);
            });

        // 将应用添加到视图
        document.body.appendChild(app.view);
    </script> */}