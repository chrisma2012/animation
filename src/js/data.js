export function animationStyleGen  (props){
    return `
    @keyframes myRotate {
        0% {
            transform: rotate(0deg);
        }
    
        100% {
            transform: rotate(${props.rotateDeg}deg);
        }
    }
    @keyframes antMyRotate {
        0% {
            transform: rotate(0deg);
        }
    
        100% {
            transform: rotate(-${props.rotateDeg}deg);
        }
    }
    @keyframes scaleHeader {
        0% {
            transform: scale(1) rotate(-${props.rotateDeg}deg);
        }
    
        50% {
            transform: scale(1.2) rotate(-${props.rotateDeg}deg);
        }
    
        100% {
            transform: scale(1) rotate(-${props.rotateDeg}deg);
        }
    }
    
    `
}