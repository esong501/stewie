import './Dictionary.scss';

function Dictionary(props) {

    return (
        <div class="Dict">
            {/* <FormControlLabel sx={{fontFamily: 'monarcha'}} /> */}
            <h4><span class="DictWord">{props.word}:</span> pat with paper towel</h4>
        </div>
    );
}

export default Dictionary;