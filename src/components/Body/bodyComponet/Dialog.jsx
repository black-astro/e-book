    import React, { useState, useRef ,Fragment} from 'react';
    import "@components/Body/css/body.css";
    import Dialog from '@mui/material/Dialog';
    import IconButton from '@mui/material/IconButton';
    import CloseIcon from '@mui/icons-material/Close';
    import DialogTitle from '@mui/material/DialogTitle';
    import DialogActions from '@mui/material/DialogActions';
    import DialogContent from '@mui/material/DialogContent';
    import Button from '@mui/material/Button';
    import ZoomInIcon from '@mui/icons-material/ZoomIn';
    import { TransformWrapper, TransformComponent,useControls } from 'react-zoom-pan-pinch';

    import Bon from '@/assets/img/svg/bon3.svg?react';
    import Normal_heart from '@/assets/img/svg/normal_heart.svg?react';
    import Deformed_heart from '@/assets/img/svg/deformed_heart.svg?react';

    // const SvgViewer = () => {
    //   const [open, setOpen] = useState(false);
    //   const [scale, setScale] = useState(1);
    //   const [isDragging, setIsDragging] = useState(false);
    //   const [startX, setStartX] = useState(0);
    //   const [startY, setStartY] = useState(0);
    //   const scrollRef = useRef(null);

    //   const adjustScrollForCenter = (newScale) => {
    //     if (scrollRef.current) {
    //         const container = scrollRef.current;
    //         const containerWidth = container.offsetWidth;
    //         const containerHeight = container.offsetHeight;
    //         const svgWidth = container.firstChild.firstChild.offsetWidth; // Bon 컴포넌트의 너비
    //         const svgHeight = container.firstChild.firstChild.offsetHeight; // Bon 컴포넌트의 높이
        
    //         // 새로운 스크롤 위치 계산
    //         const newScrollLeft = ((svgWidth * newScale) - containerWidth) / 2;
    //         const newScrollTop = ((svgHeight * newScale) - containerHeight) / 2;
        
    //         // 스크롤 위치 업데이트
    //         container.scrollLeft = newScrollLeft > 0 ? newScrollLeft : 0;
    //         container.scrollTop = newScrollTop > 0 ? newScrollTop : 0;
    //       }
    //   };

    //   const handleOpen = () => {
    //     setOpen(true);
    //   };

    //   const handleClose = () => {
    //     setOpen(false);
    //     setScale(1); // 다이얼로그를 닫을 때 스케일 초기화
    //   };

    //   const handleZoomIn = () => {
    //     // 확대
    //     const newScale = scale * 1.1;
    //     setScale(newScale);
    //     adjustScrollForCenter(newScale);
    //   };

    //   const handleZoomOut = () => {
    //     // 축소
    //     const newScale = scale / 1.1;
    //     setScale(newScale);
    //     adjustScrollForCenter(newScale);
    //   };

    //   const handleMouseDown = (event) => {
    //     setIsDragging(true);
    //     setStartX(event.clientX + scrollRef.current.scrollLeft);
    //     setStartY(event.clientY + scrollRef.current.scrollTop);
    //   };

    //   const handleMouseMove = (event) => {
    //     if (isDragging) {
    //       const x = event.clientX;
    //       const y = event.clientY;
    //       scrollRef.current.scrollLeft = startX - x;
    //       scrollRef.current.scrollTop = startY - y;
    //     }
    //   };

    //   const handleMouseUp = () => {
    //     setIsDragging(false);
    //   };

    //   return (
    //     <div>
    //       <button onClick={handleOpen}>확대</button>

    //       <Dialog 
    //         open={open} 
    //         onClose={handleClose} 
    //         maxWidth="lg" 
    //         fullWidth  
    //         aria-labelledby="customized-dialog-title"
    //         >
    //         <DialogTitle id="customized-dialog-title" style={{textAlign:'center'}}>확대 이미지</DialogTitle>
    //         <DialogContent  dividers>
    //           <div 

    //             ref={scrollRef} 
    //             style={{ overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', maxWidth: '100%', maxHeight: '100vh' }}
    //             onMouseDown={handleMouseDown}
    //             onMouseMove={handleMouseMove}
    //             onMouseUp={handleMouseUp}
    //             onMouseLeave={handleMouseUp}
    //           >
    //             <div style={{transform: `scale(${scale})`, transformOrigin: 'top left',textAlign:'center' }}>
    //                 <TransformWrapper>
    //                     <TransformComponent>
    //                         <Bon />
    //                     </TransformComponent>
    //                 </TransformWrapper>
    //             </div>
    //           </div>
    //         </DialogContent>
    //         <DialogActions>
    //            <div className='zommBtn'>
    //             <div>
    //                 <Button onClick={() => handleZoomOut()}>축소</Button>
    //                 <Button onClick={() => handleZoomIn()}>확대</Button>
    //             </div>
    //             <div>
    //                 <Button onClick={handleClose}>닫기</Button>
    //             </div>
    //           </div>
    //         </DialogActions>
    //       </Dialog>
    //     </div>
    //   );
    // };

    const SvgViewer = ({link}) => {
        const [open, setOpen] = useState(false);
      
        let zoomInAction, zoomOutAction, resetTransformAction;

        const Controls = () => {
          const { zoomIn, zoomOut, resetTransform } = useControls();
          zoomInAction = zoomIn;
          zoomOutAction = zoomOut;
          resetTransformAction = resetTransform;
      
          return null; // 실제 버튼은 렌더링하지 않음
        };

        
        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
            setScale(1); // 다이얼로그를 닫을 때 스케일 초기화
        };

    
        return (
            <div style={{position:'relative'}}>    
                <div style={{textAlign:'end', paddingRight:'5em',position:'absolute', left:'80%'}}>
                    <ZoomInIcon sx={{
                                    cursor: 
                                    'pointer', '&:hover': {color: '#965757',},
                                    color:'#ffcaca',
                                    opacity:'1',
                                    width:'50px',
                                    height:'50px',
                                }} 
                        onClick={handleOpen}/>

                    <Dialog 
                    open={open} 
                    onClose={handleClose} 
                    maxWidth="lg" 
                    fullWidth  
                    aria-labelledby="customized-dialog-title"
                    >
                    <DialogTitle id="customized-dialog-title" style={{textAlign:'center'}}>확대 이미지</DialogTitle>
                    <DialogContent  dividers style={{padding:'0'}}>
                        <div className='svg-box' style={{ width: '100%', height: '100%', overflow: 'hidden', textAlign:'center' }}>
                            <TransformWrapper  initialScale={1} minScale={1} maxScale={10}  
                            defaultPositionX={200} defaultPositionY={100} >
                                <Controls/>
                                <TransformComponent>
                                    {/* <Bon /> */}
                                    <img src={link} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div className='zommBtn'>
                        <div>
                        <Button onClick={() => zoomInAction()}>확대</Button>
                        <Button onClick={() => zoomOutAction()}>축소</Button>
                        <Button onClick={() => resetTransformAction()}>초기화</Button>
                        </div>
                        <div>
                            <Button onClick={handleClose}>닫기</Button>
                        </div>
                        </div>
                    </DialogActions>
                    </Dialog>
                </div>
        </div>
        );
    };

    export default SvgViewer;