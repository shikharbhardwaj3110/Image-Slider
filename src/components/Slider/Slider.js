import React, { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

const dotStyle = {
    zIndex: 1,
    cursor : 'pointer'
}

const iconStyle = {
    cursor: 'pointer'
}

const dotContainer = {
    position: 'absolute',
    left: '50%',
    bottom: '1rem',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto'

}

const Slider = ({ images }) => {

    let lastIndex = (images.images.length) - 1

    const [index, setIndex] = useState(0)

    

    console.log(images);

    const containerStyle = {
        position: 'relative',
        backgroundImage: `url(${images.images[index].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    }

    const prevSlide = () => {
        if (index == 0) {
            setIndex(lastIndex)
        }
        else {
            setIndex(index - 1)
        }
    }

    const nextSlide = () => {
        if (index == lastIndex) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    const jumpTo = (e, i) => {
        console.log("Recevied :", i)
        setIndex(i)
    }

    return (
        <div className='border rounded m-auto d-flex justify-content-between align-items-center' style={containerStyle}>
            <AiFillCaretLeft className='ms-md-2 ms-1' size={50} color='#ffffffbd' style={iconStyle} onClick={prevSlide} />
            <AiFillCaretRight className='me-md-2 me-1' size={50} color='#ffffffbd' style={iconStyle} onClick={nextSlide} />
            <div style={dotContainer} className='d-flex'>
                {
                    images.images.map((image, i) => {
                        return (
                            <FaCircle size={15} color={`${index == i ? '#ffffffc9' : '#cfcfcf59'}`} className='me-2' style={dotStyle} onClick={(e) => {jumpTo(e,i)}}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider