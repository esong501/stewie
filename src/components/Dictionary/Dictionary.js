import './Dictionary.scss';

function Dictionary(props) {

    return (
        <div class="Dict">
            {/* <FormControlLabel sx={{fontFamily: 'monarcha'}} /> */}
            <p><span class="DictWord">{props.word}:</span> pat with paper towel</p>
        </div>
    );
}

export default Dictionary;