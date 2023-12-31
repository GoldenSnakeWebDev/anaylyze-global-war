import styled from "@emotion/styled";

export const StyledFeed = styled.div`
    
    align-items:center;

    div#country {
        margin-bottom:20px;
    }
    div#situations {
        margin-bottom:20px;
    }
    div#options {
        margin-bottom:55px;
    }
    div#feed {
        
        margin-bottom:70px;

        div#headlinelink {
            justify-content: space-between;
            width: 100%;
            display: flex;
            margin:10px 0px;

            button#test {
                width:7%;
                cursor:pointer;

            }
        }
    }

    div#savebutton {
        display:flex;
        justify-content: center;
    }
    button#save {
        background: white;
        border: 0;
        cursor:pointer;
        font-size: 40px;

        &: hover {
            color:#f99d4b;
        }
    }

    @media (max-width: 1000px) {
        
    }
`
export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    font-size: 20px;
    font-family: serif;
    margin-top: 30px;
    padding: 20px;
    box-sizing: border-box;
`;