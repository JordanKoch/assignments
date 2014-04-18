module.exports = {
    CLOSED: 0,
    OPENED: 1,

    doors : [0, 0, 0, 0, 0],
    
    toggle: function(door){
        if (door === this.CLOSED) return this.OPENED;
        
        if (door === this.OPENED) return this.CLOSED;
    },
    
    walk : function(pass) {
        for (var door = pass; door < this.doors.length; door++) {
            this.doors[door] = this.toggle(this.doors[door]);
        }
        return this.doors;
    },
};