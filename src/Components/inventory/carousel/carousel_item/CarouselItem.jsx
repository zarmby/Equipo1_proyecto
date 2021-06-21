import Granim from 'react-granim'

const CarouselItem = (props) => {
    var stateGranim = {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
    var imgGranim = {
        image : {
            source: 'https://tse4.mm.bing.net/th/id/OIP.UcOglFGiR0N_ELHHNV9YggAAAA?pid=ImgDet&rs=1',
            blendingMode: 'color'
        }
    }

    return(
        <li className="glide__slide">
            <Granim id={`granim__${props.number}`} states={stateGranim} style={GradStyle} image = {imgGranim}></Granim>                                    
            <h1>{props.number}</h1>
        </li>
    )
}
const GradStyle = {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: .5,
    zIndex: 10000
  }

export default CarouselItem; 