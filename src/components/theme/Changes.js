import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    body {
        background-color: ${({ theme }) => theme.bgc};
    }
`;

export const NavBarContainer = styled.div`
    .navbar-container {
        background-color: ${({ theme }) => theme.bgcNavbar};
    }
    .nav > .nav-links > a {
        color: ${({ theme }) => theme.text};
    }
    .nav > .nav-links > a:hover {
        color: ${({ theme }) => theme.icon};
    } 
    .icon-theme {
        color: ${({ theme }) => theme.icon};
        background-color: ${({ theme }) => theme.bgcNavbar}; 
    }
    #contact {
        background-color: ${({ theme }) => theme.icon};
    }
    #contact:hover {
        color: #ffffff;
    }
    @media (max-width:600px) {
    .navbar-container {
    background-color: ${({ theme }) => theme.bgcNavbar};
    }
    .nav > .nav-btn:hover {
        background-color: #B00000; 
    }
    .nav > .nav-btn > label > span {
        border-top: 5px solid #FFFFFF; 
    }
    .nav > .nav-links {
        background-color: ${({ theme }) => theme.bgcNavbar2};
    }
    .nav > .nav-links > a:hover {
        color: ${({ theme }) => theme.icon};
    }
    .icon-theme {
        color: ${({ theme }) => theme.icon};
        background-color: ${({ theme }) => theme.bgc}; 
    }
  }
`;

export const HomeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};    
    .box-home {
        color: ${({ theme }) => theme.text};
    }
    .span1 {
        color: ${({ theme }) => theme.icon};
    }
`;

export const AboutMeContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.text};
    .button-cv {
        color: #fff;
        background-color: ${({ theme }) => theme.icon};
    }
    .button-cv:hover {
        background-color:#000;
        color: #fff;
    }
`;

export const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    
    .text-footer {
        color: ${({ theme }) => theme.text};
    }
    .icons-footer {
        color: ${({ theme }) => theme.text};
    }
    .icon-f {
        color: ${({ theme }) => theme.icon};
    }
    .icon-f:hover {
        color: ${({ theme }) => theme.hover};
    }
`;
export const ContactContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.text};
    .box-form {
        background-color: ${({ theme }) => theme.formContact};
        color: ${({ theme }) => theme.text};
    }
    .btn-info {
        border-color: ${({ theme }) => theme.icon};
        color: #fff;
        background-color: ${({ theme }) => theme.icon};
    }
    .btn-info:hover {
        background-color:#000;
        border-color: #000;
        color: #fff;
    }
`;
export const ProjectsContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};

    .title-box {
        color: ${({ theme }) => theme.text};
    }
`;

export const SkillsContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    .title-icon {
        color: ${({ theme }) => theme.text};
    }
    .icon {
        color: ${({ theme }) => theme.icon};
    }
    .icon:hover {
        color: ${({ theme }) => theme.hover};
    }
`;

export const ModelProjectContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: #fff;
    .button-project {
        color: #fff;
        background-color: ${({ theme }) => theme.icon}; 
    }
    .button-project:hover {
        background-color:#fff;
        color: ${({ theme }) => theme.icon};
    }
    .add-info {
    background-color: #000000b3;
}
`;


