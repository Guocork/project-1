import { useEffect } from 'react'
import styles from './Login.module.scss'
import initLoginBg from './init.ts'
import { Input, Space, Button } from 'antd';
import './Login.less'


const View = () => {
    useEffect(() => {
        initLoginBg()
        window.onresize = function () { initLoginBg() }
    }, [])
    return (
        <div className={styles.loginPage}>
            <canvas id='canvas' style={{ display: 'block' }}></canvas>
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>学习react&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                <div className="form">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" />
                        <Input.Password placeholder="密码" />
                        <div className="captchaBox">
                            <Input placeholder="验证码" />
                            <div className="captchaImg">
                                <img height='38' src='data:image/gif;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAA8AKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDtrW1ga1hZoIySikkoOeKsCztv+feL/vgU2z/484P+ua/yqyKiMY8q0IjGPKtCIWdr/wA+0P8A3wKeLK1/59of+/YqUU4U+WPYfLHsRCytP+fWH/v2KcLG0/59YP8Av2Kz9a8R6Z4ftfP1C4EYP3VAyzH0AFUfDfjnSfE08kFoZI5kG7y5gAxX1FdEcDWlSddU3yLrbQXuXsdCLCz/AOfWD/v2KcLCz/59IP8Av2KlDADJPFQ2OpWepRvJZXMc8aOY2eM5XcMZAPQ9e1YezTV7D5Y9iQafZf8APpb/APfsf4U4adZf8+dv/wB+l/wpbi7t7OEzXM8cMQ6vI4UD8TXKaz8T/Dejkot0b2b+5aYfH1bO39c1tQwdXES5aMHJ+SE1BbnWjTrH/nzt/wDv0v8AhThptj/z5W//AH6X/CuY8J/ELS/Fl1Ja2sFzBcRx+YyyqMFcgcEE+orsV5pV8LPDzdOrGzXRglFq6K40yw/58rb/AL9L/hTxplh/z423/fpf8KsCmzXEVvE0ssipGoyzMcACsuRPoPlj2Ixpen/8+Nt/35X/AAp40rT/APnwtf8Avyv+FcLf/GLw1ZXpt4jc3SqcPNFH8g/E8n8BXc6Xqlnq9hDe2UyzW8y7kcdx/SumvgK9CKnVpuKe10Jcj0Q8aVp3/Pha/wDflf8ACnDSdO/6B9r/AN+V/wAKtCniuXlj2Hyx7FUaTpv/AED7T/vyv+FVtT0vT49IvXSxtVdYHKsIVBB2nkcVrCqurf8AIFv/APr3k/8AQTSlGPK9BSjHlehyVn/x5wf9c1/lVkVXs/8Ajzg/65r/ACqyKcfhQ4/ChwrH8S6z/Ymi3N4BueNMqPetjtXI+NLc3mkXFtnHmIQD79v1rehyKrH2nw3V/TqN3toeeeHHbWr661nU/wDSrjdtQSDcF+gqvqN42heMrTVIVEaswLBeAR0b+dL4Dulg1SbTLn5Gk5QN/fHBH5fyrQ8e6Zm0WdB80LZ/A9f6flX11So6OdeyqfwprlS6crVlbpa5zpXp3W52eseMbiCRbeLTZrizngybiP8AhyOv0xWBo0tzDqlppNhrltFb2jCUwqDunY8nPqPxrF0WSbxD4VOmi6eKSI+WxHOV7A+2OPwrqdK8M232u0uZId09ugRX6dBivLnKlglPDz0krp6Xu18MnfTW7Wm17mivLUm+Kl203hJo16echb6f/rxXH6baeHtOhhllEDyuituuWDYyM9Og/KvQfE2kf2jpclrJu2SLgkdR3BribbwZpkKlZoZZT3ZnIP6VGExtGOD9hUqSj7zbUVumlvqtrBKL5rpHd+FrS0SYXtpbW6NIm0yQoBuXPt1rvojhBmvAtJ1ef4f+IUgZ3m0e6OcN1TnqPccZ9RXQao/ijV7iYHxNHb6K5LxNbqFkaM8jJAHbjrUYjLeWam6q9nJXUnfVbWsk9V2Gp9Lanrv2mEu0YlQyKMlQwyPwrh/GWgJ4gv4JLq6n+yQpg2sbYV2znJrzpPD/AITMoS112eO+ByswuUJ3fkP0Oa7Hw1D4lttQMOqalDqOm+WQkjcSq3YnjJ79z1qZUI4V+1w9a0kvtRcX/wBu7r8UwvzaNHO+MTZ6b4cks4rOCFHwsaogHPr9fet74MXNzFos8ExbyTNuiB7ZHNcf8QJhN4ztbWYMLSNFPTjk8n9P0r1Twfpn2aJQq7VHQCunF1XQyyFGXvOo+dvt0t69xRV5t9jvE5AqQUyMYUVIK+fNRwqrq3/IEv8A/r2k/wDQTVsVV1f/AJAl/wD9e0n/AKCamXwsmXws5Kz/AOPKD/rmv8qsiq9l/wAeUH/XNf5VZFEfhQR+FDgKytYsvtEDDHatYUMgdcGqKPFda8Kma78+CQ29ypyHHQn/AD3qpq2q61Dp7W+rWaTqVx9oiPH4j/8AVXr97o6T5IXmuc1Lw9I6kKDivTo5nNQjTrxU4x2vo16Na/mvIhw6rQ89+G5Y69LHg+U0fP1zxXutnYxqgIArivDvhz7Fc7xEFJPOBivRLdNsYFTmmOWOxLrqPLe34IIR5VYimsklTBFch4qW90yCJ9M0pb7cSJB5m0p6HHcda7rGRWVqdo8yELXFSmoTUpRUl2d7fhZlM+fPE+q3d6FhvNMe0dWyM5P5HFaXh/Tm8QaDFa3cs6xW8p2BGxuU9j+NdvqvhiW6kO5Nwz0IzW14e8NC2QKUAHpivaqZ0vqkaFGnyOLumm3b0vr+JmqfvXbucU/gnSWh8sWbLx98O2769aitvCOrREQWfiS8t7Xps+bKj0GGH9K9i/sWErjaKYuhRq+QK4YZrjI6Oo3/AIrS/wDSrlckexwWuWuqRaWZ7ArPexKD+8TPm468Duev6VufDfxZ/bcc9hf2v2PVLbBeEgruQ/xAHkc8EfT1rorrScx4UVDp2m+XdJK8SGRMhXKjcoPXB7VhGtT9jKnOCbvdS2a8vNDs73udWvIp4qOIHaKlFcxQ4VV1f/kCX/8A17Sf+gmrYqrq/wDyBL//AK9pP/QTUy+Fky+FnJWX/Hlb/wDXNf5VZFczFrVzFEkapEQihRkHt+NSf2/df884f++T/jWUa0bIzjVjZHSinCuZ/wCEhu/+ecH/AHyf8aX/AISK7/55wf8AfJ/xqvbRH7aJ1AGaQwq3UCuZ/wCEkvP+eUH/AHyf8aX/AISW8/55Qf8AfJ/xo9tEPbROmS3RTwBVhRiuS/4Se9/55W//AHy3+NL/AMJRe/8APK3/AO+W/wAaPbRD20TrxS7A3WuQ/wCEqvv+eVv/AN8t/jS/8JXff88rb/vlv8aPbRD20TrDaxt1UVLHCqdBXH/8Jbf/APPG2/75b/Gl/wCEv1D/AJ423/fLf/FUe2iHtonbAU8CuH/4TDUP+eNr/wB8t/8AFUv/AAmWo/8APG1/75b/AOKo9tEPbRO42A0qwqD0rh/+Ez1H/nja/wDfDf8AxVL/AMJrqX/PC0/74b/4qj20Q9tE71RiniuA/wCE21L/AJ4Wn/fDf/FUv/Ccan/zwtP++G/+Ko9tEPbRPQRVXV/+QHqH/XtJ/wCgmuK/4TnU/wDnhaf98N/8VUdz4z1G6tZrd4bUJKjIxVWyARjj5qmVaNmKVWNmf//Z' alt=''></img>
                            </div>
                        </div>
                        <Button type="primary" block>
                            登录
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default View