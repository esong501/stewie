import './Dictionary.scss';

function Dictionary(props) {

    return (
        <div class="Dict">
            <p><span class="DictWord">{props.word}:</span> {props.def}</p>
        </div>
    );
}

export default Dictionary;