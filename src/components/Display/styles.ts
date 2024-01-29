import styled from "styled-components/native";
import { theme } from "../../themes/theme";

interface TextProps {
    secondary?: boolean;
    fontSize?: "small" | "medium" | "big";
    fontStyle?:
        | "displayThin"
        | "displayRegular"
        | "displaySemibold"
        | "textRegular"
        | "textSemibold";
}

export const Container = styled.View`
    align-items: center;
`;

export const Text = styled.Text<TextProps>`
    color: ${props =>
        props.secondary ? theme.secondaryColor : theme.primaryColor};

    font-size: ${({ fontSize }) =>
        fontSize ? theme.fontSizes[fontSize] : theme.fontSizes.small};

    font-family: ${({ fontStyle }) =>
        fontStyle
            ? theme.fontStyles[fontStyle]
            : theme.fontStyles.displaySemibold};
`;
