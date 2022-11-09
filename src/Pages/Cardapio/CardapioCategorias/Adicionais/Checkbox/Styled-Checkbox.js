import styled from "styled-components";

export const CheckboxContainer = styled.div`
    width: 100%;
    justify-content: space-between; 
     
    .input{
        justify-content: flex-start;

        label{
            margin-left: 4px;
        }

        input{
            width: 15px;
            height: 15px;
        }

        p{
            margin: 0;
            padding: 0;
            padding-right: 4px;
            font-size: 0.9em;
            flex-wrap: nowrap;
        }
    }

    .espaco{
        width: 100%;

        div{
            width: 100%;
            height: 1px;
            background-color: lightgray;
        }
    }

    .preco{
        font-size: 0.9em;
        
        p{
            margin: 0;
            margin-left: 4px;
        }

        span{
            margin-left: 2px;
        }
    }
@media screen and (max-width: 500px) {
}
`;