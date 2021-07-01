import React from 'react';
import Button from '@material-ui/core/Button';


export default function B(props) {

    return (
        <Button
        variant="contained"
        color="primary"
        className={classes.Button2}
        startIcon={<Cross />}
        onClick={onCancel}
    >
        CANCELAR
        </Button>
    );
}