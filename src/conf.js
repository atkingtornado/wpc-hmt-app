/// MODEL PARAMS
const qpfParams = {
	"precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
	"precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
	"precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 24},
	"precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
	"mean1": {"label": "1hr Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
}
const qpfExceedanceParams = {
	"ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
	"ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
	"ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6},
	"mari6day1": {"label": "Max QPF Exceedance of 6hr ARI for Day 1", "min_fcst_hr": 24, "fcst_hr_step": 24},
	"mari6day2": {"label": "Max QPF Exceedance of 6hr ARI for Day 1", "min_fcst_hr": 48, "fcst_hr_step": 24},
}
const qpfDurationParams = {
	"duration6": {"label": "Duration of 1h QPF >= 0.25in/hr in the 6h period", "min_fcst_hr": 6, "fcst_hr_step": 1},
	"duration24": {"label": "Duration of 1h QPF >= 0.25in/hr in the 24h period", "min_fcst_hr": 24, "fcst_hr_step": 6},
}
const precipitationRateParams = {
	"prate": {"label": "Hourly Instantaneous Precipitation Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"pmax": {"label": "Hourly Max Rain Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
}
const reflectivityParams = {
	"refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
	"refl1": {"label": "1 hr Reflectivity at 1 km", "min_fcst_hr": 0, "fcst_hr_step": 1},
}
const severeParams = {
	"uh": {"label": "Hourly Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"cape": {"label": "Hourly MU CAPE", "min_fcst_hr": 1, "fcst_hr_step": 1},
}
const synopticParams = {
	"tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"td": {"label": "2m Dewpoint in C", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"mixing850": {"label": "850mb Heights, Mixing Ratio, Temperature and Winds", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"mixing700": {"label": "700mb Heights, Mixing Ratio, Temperature and Winds", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"wind300": {"label": "300mb Heights and Winds", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"arscale": {"label": "Atmo. River Scale", "min_fcst_hr": 24, "fcst_hr_step": 6},
}
const winterParams = {
	"snow1": {"label": "1 hr Snowfall", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"snow3": {"label": "3 hr Snowfall", "min_fcst_hr": 3, "fcst_hr_step": 1},
	"snow6": {"label": "6 hr Snowfall", "min_fcst_hr": 6, "fcst_hr_step": 1},
	"snow24": {"label": "24 hr Snowfall", "min_fcst_hr": 24, "fcst_hr_step": 6},
	"les": {"label": "1 hr Lake Effect Snowfall", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"ptype": {"label": "Hourly Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"frz": {"label": "Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"dgz": {"label": "Dendritic Growth Zone", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"swe1": {"label": "1 hr Snow Water Equivalent", "min_fcst_hr": 1, "fcst_hr_step": 1},
	"swe3": {"label": "3 hr Snow Water Equivalent", "min_fcst_hr": 3, "fcst_hr_step": 1},
	"swe6": {"label": "6 hr Snow Water Equivalent", "min_fcst_hr": 6, "fcst_hr_step": 1},
	"swe24": {"label": "24 hr Snow Water Equivalent", "min_fcst_hr": 24, "fcst_hr_step": 6},
}
const verificationParams = {
	"precip6v": {"label": "Verification 6 hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
	"precip24v": {"label": "Verification 24 hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
}

// OBS PARAMS
const qpfObsParams = {
	"precip1": {"label": "MRMS Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 1},
}


// Product Conf
export const modelConf = {
	"GFS": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/GFS/gfs_",
		"run_hrs": ["00","06","12","18"],
		"num_fcst_hrs": 84,
		"parameters": {
			"QPF": {
				"precip1": qpfParams['precip1'],
				"precip3": qpfParams['precip3'],
				"precip6": qpfParams['precip6'],
				"precip20": qpfParams['precip20'],
				"precip24": qpfParams['precip24'],
			},	
			"QPF Exceedance of ARI": {
				"ari1": qpfExceedanceParams["ari1"],
				"ari3": qpfExceedanceParams["ari3"],
				"ari6": qpfExceedanceParams["ari6"],
				"ari24": qpfExceedanceParams["ari24"],
				"mari6day1": qpfExceedanceParams["mari6day1"],
				"mari6day2": qpfExceedanceParams["mari6day2"],
			},
			"QPF Duration": {
				"duration6": qpfDurationParams["duration6"],
				"duration24": qpfDurationParams["duration24"],
			},
			"Reflectivity": {
				"refc1": reflectivityParams["refc1"],
			},
			"Synoptic": {
				"tmpc": synopticParams["tmpc"],
				"td": synopticParams["td"],
				"pwat": synopticParams["pwat"],
				"mixing850": synopticParams["mixing850"],
				"mixing700": synopticParams["mixing700"],
				"vort500": synopticParams["vort500"],
				"wind300": synopticParams["wind300"],
				"ivt": synopticParams["ivt"],
				"arscale": synopticParams["arscale"]
			},
			"Winter": {
				"snow1": winterParams["snow1"],
				"snow3": winterParams["snow3"],
				"snow6": winterParams["snow6"],
				"snow24": winterParams["snow24"],
				"ptype": winterParams["ptype"],
			},
			"Verification": {
				"precip6v": verificationParams["precip6v"],
				"precip24v": verificationParams["precip24v"]
			}
		}
	},
	"NAMnest": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/NAM/nam_",
		"num_fcst_hrs": 60,
		"run_hrs": ["00","06","12","18"],
		"parameters": {
			"QPF": {
				"precip1": qpfParams['precip1'],
				"precip3": qpfParams['precip3'],
				"precip6": qpfParams['precip6'],
				"precip20": qpfParams['precip20'],
				"precip24": qpfParams['precip24'],
			},
			"QPF Exceedance of ARI": {
				"ari1": qpfExceedanceParams["ari1"],
				"ari3": qpfExceedanceParams["ari3"],
				"ari6": qpfExceedanceParams["ari6"],
				"ari24": qpfExceedanceParams["ari24"],
				"mari6day1": qpfExceedanceParams["mari6day1"],
				"mari6day2": qpfExceedanceParams["mari6day2"],
			},
			"QPF Duration": {
				"duration6": qpfDurationParams["duration6"],
				"duration24": qpfDurationParams["duration24"],
			},
			"Precipitation Rate": {
				"pmax": precipitationRateParams["pmax"]
			},
			"Reflectivity": {
				"refc1": reflectivityParams["refc1"],
				"refl1": reflectivityParams["refl1"],
			},
			"Severe": {
				"uh": severeParams["uh"],
				"cape": severeParams["cape"],
			},
			"Synoptic": {
				"tmpc": synopticParams["tmpc"],
				"td": synopticParams["td"],
				"pwat": synopticParams["pwat"],
				"mixing850": synopticParams["mixing850"],
				"mixing700": synopticParams["mixing700"],
				"vort500": synopticParams["vort500"],
				"wind300": synopticParams["wind300"],
			},
			"Winter": {
				"snow1": winterParams["snow1"],
				"snow3": winterParams["snow3"],
				"snow6": winterParams["snow6"],
				"snow24": winterParams["snow24"],
				"ptype": winterParams["ptype"],
			},
			"Verification": {
				"precip24v": verificationParams["precip24v"]
			}
		}	
	},
	"HRRR": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/HRRR/hrrr_",
		"num_fcst_hrs": 48,
		"run_hrs": ["00","06","12","18"],
		"parameters": {
			"QPF": {
				"precip1": qpfParams['precip1'],
				"precip3": qpfParams['precip3'],
				"precip6": qpfParams['precip6'],
				"precip20": qpfParams['precip20'],
				"precip24": qpfParams['precip24'],
			},
			"QPF Exceedance of ARI": {
				"ari1": qpfExceedanceParams["ari1"],
				"ari3": qpfExceedanceParams["ari3"],
				"ari6": qpfExceedanceParams["ari6"],
				"ari24": qpfExceedanceParams["ari24"],
				"mari6day1": qpfExceedanceParams["mari6day1"],
			},
			"QPF Duration": {
				"duration6": qpfDurationParams["duration6"],
				"duration24": qpfDurationParams["duration24"],
			},
			"Precipitation Rate": {
				"prate": precipitationRateParams["prate"]
			},
			"Reflectivity": {
				"refc1": reflectivityParams["refc1"],
				"refl1": reflectivityParams["refl1"],
			},
			"Severe": {
				"uh": severeParams["uh"],
				"cape": severeParams["cape"],
			},
			"Synoptic": {
				"tmpc": synopticParams["tmpc"],
				"td": synopticParams["td"],
				"pwat": synopticParams["pwat"],
				"mixing850": synopticParams["mixing850"],
				"mixing700": synopticParams["mixing700"],
				"vort500": synopticParams["vort500"],
				"wind300": synopticParams["wind300"],
			},
			"Winter": {
				"snow1": winterParams["snow1"],
				"snow3": winterParams["snow3"],
				"snow6": winterParams["snow6"],
				"snow24": winterParams["snow24"],
				"les": winterParams["les"],
				"ptype": winterParams["ptype"],
				"frz": winterParams["frz"],
				"dgz": winterParams["dgz"],
				"swe1": winterParams["swe1"],
				"swe3": winterParams["swe3"],
				"swe6": winterParams["swe6"],
				"swe24": winterParams["swe24"],
			},
			"Verification": {
				"precip6v": verificationParams["precip6v"],
				"precip24v": verificationParams["precip24v"]
			}
		}	
	},
}



export const ensemblesPQPFConf = {
	"HREF": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/HREF/href_",
		"num_fcst_hrs": 48,
		"run_hrs": ["00","06","12","18"],
		"parameters": {
			"QPF": {
				"mean1": qpfParams['mean1']
			}	
		}
	},
}

export const obsEroAriFfgConf = {
	"Observations": {
		"url_base": "https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/OBS/obs_",
		"num_fcst_hrs": 83,
		"run_hrs": [...Array(24).keys()].map((val) => (val < 10 ? "0" + val.toString() : val.toString())),
		"parameters": {
			"MRMS QPE Totals": {
				"precip1": qpfObsParams['precip1'],
			}	
		}
	},
}