import React from 'react'
import MyProfile from '../assets/MyProfile.jpg'
import MyProfile2 from '../assets/MyProfile2.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, AppBar, Toolbar, Typography, Button, Avatar, Fab, TextField, Container } from '@mui/material'
import { Link } from 'react-router-dom';
import { Circle } from '@mui/icons-material'


function Profile() {
    return (
        <>
            {/* Navigation */}
            <Box>
                <AppBar position='static' sx={{ backgroundColor: 'black', height: '96px', justifyContent: 'center' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography sx={{
                                flexGrow: 1,
                                fontSize: '32px',
                                color: '#FFFFFF',
                                ml: 4
                            }}>
                                KEERATIPONG WAIKID
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontFamily: 'Inter',
                                mr: '32px'
                            }}
                                component={Link} to='work'
                            >
                                Work
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontFamily: 'Inter',
                                mr: '32px'
                            }}
                                component={Link} to='about'
                            >
                                About
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontFamily: 'Inter',
                                mr: '32px'
                            }}
                                component={Link} to='contact'
                            >
                                Contact
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            {/* Content */}
            <Box sx={{ 
                mx: 'auto',
                display: 'flex',
                mt: '50px',

                alignItems: 'center',
                flexDirection: "column",
            }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', py: '120px' }}>
                        <Box sx={{ mr: { md: '20px' } }}> {/* เพิ่ม margin-right สำหรับระยะห่าง */}
                            <Box sx={{ width: { xs: '100%', md: '580px' } }}>
                                <Typography sx={{ fontSize: { xs: '48px', md: '70px' }, color: 'white', lineHeight: 1 }}>
                                    HI, I AM
                                </Typography>
                                <Typography sx={{ fontSize: { xs: '48px', md: '90px' }, color: 'white', lineHeight: 1 }}>
                                    keeratipong
                                </Typography>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Manrope', color: '#FFFFFF', mt: 2 }}>
                                    มนุษย์เป็ดผู้ที่กำลังศึกษาเรียนรู้ทักษะการเขียนและพัฒนาเว็บไซต์เพื่อนำไปประกอบอาชีพในอนาคต
                                </Typography>
                                <Button
                                    variant='contained' sx={{ fontSize: '16px', fontFamily: 'Manrope', fontWeight: 'bold', color: 'black', bgcolor: '#d3e07A', width: '187px', height: '54px', borderRadius: '100px', my: '40px', gap: '12px' }}>
                                    Contact Me <Circle />
                                </Button>
                                <Box component="span">
                                    <Fab sx={{ bgcolor: '#222222', mx: '8px' }}>
                                        <LinkedInIcon sx={{ color: '#d3e07A' }} />
                                    </Fab>
                                    <Fab sx={{ bgcolor: '#222222' }}>
                                        <GitHubIcon sx={{ color: '#d3e07A' }} />
                                    </Fab>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Avatar variant='square' src={MyProfile} sx={{ width: '100%', height: '350px', borderRadius: '20px' }} />
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ width: '1440px', borderBottom: '1px solid #484848', mx: 'auto' }} />
            </Box>




            {/* About */}
            <Box sx={{ bgcolor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, my: '80px', alignItems: 'flex-start' }}>
                        <Box sx={{ width: { xs: '100%', md: '307px' } }}>
                            <Typography sx={{ fontSize: { xs: '48px', md: '101px' }, color: 'white' }}>
                                ABOUT ME
                            </Typography>
                        </Box>

                        <Box sx={{ ml: { xs: 0, md: '120px' }, mt: { xs: '32px', md: '50px' }, flex: 1 }}>
                            <Box sx={{ width: '100%' }}>
                                <Typography sx={{ fontSize: { xs: '24px', md: '32px' }, fontFamily: 'Manrope', color: 'white', lineHeight: '140%' }}>
                                ผมเป็นนักพัฒนาเว็บไซต์ฝั่ง Front-End ที่ทำงานอยู่ในกรุงเทพฯ
                                กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
                                มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                                </Typography>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Manrope', color: '#FFFFFF', lineHeight: '150%', mt: '16px' }}>
                                    ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
                                    ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม
                                    ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: '40px', alignItems: 'center' }}>
                                <Button variant='contained' sx={{ fontSize: '16px', fontFamily: 'Manrope', fontWeight: 'bold', color: 'black', bgcolor: '#d3e07A', width: '244px', height: '54px', borderRadius: '100px', mr: '12px', mb: { xs: '12px', md: 0 } }}>
                                    DOWNLOAD RESUME < Circle />
                                </Button>
                                <Fab sx={{ bgcolor: '#222222', mr: '12px' }}>
                                    <LinkedInIcon sx={{ color: '#d3e07A' }} />
                                </Fab>
                                <Fab sx={{ bgcolor: '#222222' }}>
                                    <GitHubIcon sx={{ color: '#d3e07A' }} />
                                </Fab>
                            </Box>
                        </Box>
                    </Box>
                </Container>

                <Avatar variant='square' 
                        src={MyProfile2} 
                        sx={{ 
                            width: '50%', 
                            maxWidth: '1080px', 
                            height: '450px',
                            borderRadius: '20px', 
                            mb: '50px' }} />
                <Box sx={{ width: '1440px', borderBottom: '1px solid #484848', mx: 'auto' }} />
            </Box>


            {/*  My Capabilities */}
            <Box sx={{ bgcolor: 'black' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{ my: '100px', width: '100%' }}>
                            <Typography sx={{ fontSize: { xs: '48px', md: '76px' }, color: 'white' }}>
                                My Capabilities
                            </Typography>
                        </Box>

                        <Box sx={{ my: '115px', width: '100%' }}>
                            <Typography sx={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
                            </Typography>
                            <Box sx={{ my: '25px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    HTML
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    CSS
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '150px', height: '56px', fontFamily: 'Manrope' }}>
                                    JAVASCRIPT
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    FLUTTER
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    DART
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    IoT
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    REACT
                                </Button>
                                <Button variant="outlined" color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', fontFamily: 'Manrope' }}>
                                    DATABASE
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ width: '1440px', borderBottom: '1px solid #484848', mx: 'auto' }} />
            </Box>


            {/* MY EXPERIENCE */}
            <Box sx={{ bgcolor: 'black' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
                        <Box sx={{ my: '100px', width: '100%' }}>
                            <Typography sx={{ fontSize: { xs: '48px', md: '76px' }, color: 'white' }}>
                                My Experience
                            </Typography>
                        </Box>

                        <Box sx={{ my: '115px', mx: { xs: '20px', md: '50px' }, width: '100%' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '16px' }}>
                                <Typography sx={{ fontSize: '24px', color: 'white', fontFamily: 'Manrope' }}>
                                    Freelance Developer
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                    Nov 2023 — Present
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
                                ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
                                ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
                                ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '16px' }}>
                                <Typography sx={{ fontSize: '24px', color: 'white', fontFamily: 'Manrope' }}>
                                    Front-End Intern
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                    Sep 2023 — Nov 2023
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope' }}>
                                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                            </Typography>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ width: '1440px', borderBottom: '1px solid #484848', mx: 'auto' }} />
            </Box>


            {/* LET'S CONNECT */}
            <Box sx={{ bgcolor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', px: { xs: 2, md: 0 }, py: { xs: 4, md: 6 } }}>
                    <Box sx={{ flex: 1, mb: { xs: '40px', md: '0' }, maxWidth: '600px' }}>
                        <Typography sx={{ fontSize: { xs: '48px', md: '76px' }, color: 'white', wordBreak: 'break-word' }}>
                            LET'S CONNECT
                        </Typography>
                        <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope', mt: '16px' }}>
                            Say hello at <span style={{ textDecoration: 'underline 2px #D3E97A', color: '#FFFF' }}
                            >S6752D10011@sau.ac.th</span>
                        </Typography>

                        <Typography sx={{ fontSize: '18px', color: '#FFFFFF', fontFamily: 'Manrope', mt: '10px' }}>
                            For more info, here's my <span style={{ textDecoration: 'underline 2px #D3E97A', color: '#FFFF' }}>resume</span>
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', my: '40px', gap: '16px' }}>
                            <LinkedInIcon sx={{ color: '#d3e07A', fontSize: '32px' }} />
                            <GitHubIcon sx={{ color: '#d3e07A', fontSize: '32px' }} />
                            <XIcon sx={{ color: '#d3e07A', fontSize: '32px' }} />
                            <InstagramIcon sx={{ color: '#d3e07A', fontSize: '32px' }} />
                        </Box>

                        <Typography sx={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Manrope', mt: '330px' }}>
                            © 2025 Keeratipong Waikid
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, maxWidth: '600px' }}>
                        <Box sx={{ my: '16px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Manrope', mb: '8px' }}>Name</Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '100%' }} />
                        </Box>
                        <Box sx={{ my: '16px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Manrope', mb: '8px' }}>Email</Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '100%' }} />
                        </Box>
                        <Box sx={{ my: '16px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Manrope', mb: '8px' }}>Subject</Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '100%' }} />
                        </Box>
                        <Box sx={{ my: '16px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#FFFFFF', fontFamily: 'Manrope', mb: '8px' }}>Message</Typography>
                            <TextField multiline rows={6} variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '100%', color: 'white' }} />
                        </Box>
                        <Button variant="contained" sx={{ fontSize: '16px', fontFamily: 'Manrope', fontWeight: 'bold', color: 'black', bgcolor: '#d3e07A', width: '140px', height: '54px', borderRadius: '100px', my: '30px' }}>
                            SUBMIT
                        </Button>
                    </Box>
                </Container>
            </Box>




        </>
    )
}

export default Profile