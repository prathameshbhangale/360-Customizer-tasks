import express from 'express';
const app = express();

const users = [
    { username: 'prathamesh', email: 'bhangaleprathamesh744@gmail.com', age: 21, location: 'Pune', active_status: true },
    { username: 'harish', email: 'harishbendale0@gmail.com', age: 21, location: 'Jalgaon', active_status: false },
];

app.get('/api/users/profile',(req,res)=>{
    const {username,age,location,active_status} = req.query;
    let user = users.find(u=> u.username === username);
    let data = user
    if(!user){
        return res.status(404).json({error:'user not found'});
    }

    if(age) user = user.age == age ? user:null;
    if(location) user = user.location == location ? user:null;
    if(active_status) user = user.active_status == (active_status == 'true');

    if(user){
        res.json({
            success: true,
            data,
        });
    }
    else{
        res.status(404).json({
            success: false,
            error: 'user not found'
        });
    }
});

const port = 7000;
app.listen(port, () => console.log(`Server running on port ${port}`));
