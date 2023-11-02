export const modelConf = {
	"HRRR": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/HRRR/hrrr_",
		"num_fcst_hrs": 48,
		"min_fcst_hr": 0,
		"run_hrs": ["00","06","12","18"],
		"parameters": {
			"QPF": {
				"precip1": "1hr QPF",
				"precip3": "3hr QPF",
				"precip6": "6hr QPF",
				"precip20": "20hr QPF",
				"precip24": "24hr QPF"
			},
			"Reflectivity": {
				"refc1": "Composite Reflectivity"
			},
		}
		
	},
	"GFS": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/GFS/gfs_",
		"num_fcst_hrs": 48,
		"min_fcst_hr": 0,
		"run_hrs": ["00","06","12","18"],
		"parameters": {
			"QPF": {
				"precip1": "1hr QPF"
			}	
		}
	}
}

export const ensemblesPQPFConf = {
	"HREF": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/HREF/href_",
		"num_fcst_hrs": 48,
		"min_fcst_hr": 1,
		"run_hrs": ["00","06","12","18"],
		"parameters": {
			"QPF": {
				"mean1": "1hr Mean"
			}	
		}
	},

}