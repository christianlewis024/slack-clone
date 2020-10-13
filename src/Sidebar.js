import React, {useState, useEffect} from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from "./SidebarOption"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon  from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon  from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import db from "./firebase"






function Sidebar() {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        // run this code ONCE when the sidebar component loads
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>Slack Workspace</h2>
                <h3><FiberManualRecordIcon/>Christian L</h3>
                </div>
                <CreateIcon/>                
            </div>
            <SidebarOption  Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption  Icon={InboxIcon} title="Darn Links"/>
            <SidebarOption  Icon={DraftsIcon} title="Discuss the Sphere"/>
            <SidebarOption  Icon={BookmarkBorderIcon} title="Darn Us"/>
            <SidebarOption  Icon={AppsIcon} title="Darn Theory"/>
            <SidebarOption  Icon={FileCopyIcon} title="Debate the Darn"/>
            <SidebarOption  Icon={ExpandLessIcon} title="Less Darn Please"/>
            <hr/>
            <SidebarOption  Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption  Icon={AddIcon} addChannelOption title="Add Channel"/>
            {/* connect to db and list all the channels */}
            {/* sidebarOption */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}

    
        </div>
    )
}

export default Sidebar
