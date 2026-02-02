import {Fragment, ReactElement} from "react";

export default function TextWithLineBreaksComponent({text, className}: Readonly<TextWithLineBreaksComponentProps>): ReactElement {
    return (
        <div className={className}>
            {text.split('\n').map((text, index) => (
                <Fragment key={index}>
                    {text}
                    <br />
                </Fragment>
            ))}
        </div>
    );
}

interface TextWithLineBreaksComponentProps {
    text: string;
    className?: string;
}