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

    // import Bon from '@/assets/img/svg/bon3.svg?react';
    // import Normal_heart from '@/assets/img/svg/normal_heart.svg?react';
    // import Deformed_heart from '@/assets/img/svg/deformed_heart.svg?react';

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