export default function Button({ link, text, onClick = null}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" onClick={onClick}>
            {text}
        </a>
    );
}
