import json

start_at_9 = open('start_at_9.json',) 
data = json.load(start_at_9) 
# print(data)
start_time=data[0]["time_slot_start"]
no_of_meetings=len(data)
end_time=data[no_of_meetings-1]['time_slot_end']


def conv_to_int(time):
    return int(time)

def get_time_hrs_mins(time):
    return list(map(conv_to_int,time.split(":")))

start_time=get_time_hrs_mins(start_time)
start_time=start_time[0]+(start_time[1]/60)

end_time=get_time_hrs_mins(end_time)
end_time=end_time[0]+(end_time[1]/60)
print(start_time)
print(end_time)
print(end_time-start_time)






