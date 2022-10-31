import './ExpandRecipe.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

// temp
import bchick from '../../img/newbake.png';



const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface ExpandRecipe {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}


function ExpandRecipe() {
    return (
        <div>
            <Header />
            <div class="Recipe">
                <div class = "RecipeSidebar">
                    <div class="RecipeTags">
                        <ul class="TagsList">
                            <li>Level 1</li>
                            <li>8 Ingredients</li>
                            <li>veg/gf</li>
                            <li>prep time</li>
                            <li>total time</li>
                        </ul>
                    </div>
                    <div class = "RecipeIngreds">
                        <h2>Ingredients</h2>
                        <ul class="IngredientsList">
                            <li>ingred 1</li>
                            <li>ingred 2</li>
                            <li>ingred 3</li>
                            <li>ingred 4</li>
                        </ul>
                    </div>
                    <div >
                        <button class="CookButton">
                            <span>Start Cooking</span>
                        </button>
                    </div>
                </div>
                <div class="RecipeOverview">
                    <h1>Creamy Mushroom Soup</h1>
                    <img src = {bchick} class ="RecipeImg" alt='thumbnail'/>
                    <p class="RecipeDesc">A delicious creamy mushroom soup description. A delicious creamy mushroom soup description.
                    A delicious creamy mushroom soup description.A delicious creamy mushroom soup description
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ExpandRecipe;