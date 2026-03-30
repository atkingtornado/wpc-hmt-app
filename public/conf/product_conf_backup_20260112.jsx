{
    "url_base": "https://www.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/",
    "models": {
        "HRRR": {
            "url_end": "HRRR/[RUN]/hrrr_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 48,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "3hr QPF ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frozr24": {"label": "24hr Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "3hr Precip.": {
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari3": {"label": "3hr QPF ARI", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3hr Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen850": {"label": "850mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv850": {"label": "850mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen700": {"label": "700mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv700": {"label": "700mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "wind300": {"label": "300mb Wind and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr": {"label": "Run-Total Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "les": {"label": "Ice Cover and 850mb-Sfc. Temp. Difference", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },        
        "NAMnest": {
            "url_end": "NAM/[RUN]/nam_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "3hr QPF ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen850": {"label": "850mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv850": {"label": "850mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen700": {"label": "700mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv700": {"label": "700mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "wind300": {"label": "300mb Wind and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "les": {"label": "Ice Cover and 850mb-Sfc. Temp. Difference", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "FV3HREF": {
            "url_end": "FV3HREF/[RUN]/fv3href_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental","summer","winter","default"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "ARWHREF": {
            "url_end": "ARWHREF/[RUN]/arwhref_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 48,
            "groups": [],
            "skip_display": ["experimental","summer","winter","default"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "ARWHREF2": {
            "url_end": "ARWHREF2/[RUN]/arwhref2_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 48,
            "groups": [],
            "skip_display": ["experimental","summer","winter","default"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "Instant Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "GSL MPAS": {
            "url_end": "MPAS/[RUN]/mpas_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental","summer","winter","default"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "3hr QPF ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio (2m T Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen850": {"label": "850mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv850": {"label": "850mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen700": {"label": "700mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv700": {"label": "700mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "wind300": {"label": "300mb Wind and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio (2m T Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr": {"label": "Run-Total Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "GSL MPASA": {
            "url_end": "MPASA/[RUN]/mpasa_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 84,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "3hr QPF ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio (2m T Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen850": {"label": "850mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv850": {"label": "850mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen700": {"label": "700mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv700": {"label": "700mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "wind300": {"label": "300mb Wind and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio (2m T Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "RRFS": {
            "url_end": "RRFS/[RUN]/rrfs_",
            "archive_url": {
                "url_end": "RRFSp1/[RUN]/rrfsp1_",
                "end_date": "20241205"
            },
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 84,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frozr24": {"label": "24hr Ice Pellets QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "rh": {"label": "2m Rel. Hum., 2m Dew Point", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen850": {"label": "850mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv850": {"label": "850mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen700": {"label": "700mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv700": {"label": "700mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "wind300": {"label": "300mb Wind and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "REFSm1": {
            "url_end": "REFSm1/[RUN]/refsm1_",
            "archive_url": {
                "url_end": "RRFSm2/[RUN]/rrfsm2_",
                "end_date": "20241205"
            },
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "REFSm2": {
            "url_end": "REFSm2/[RUN]/refsm2_",
            "archive_url": {
                "url_end": "RRFSm3/[RUN]/rrfsm3_",
                "end_date": "20241205"
            },
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
   		    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "REFSm3": {
            "url_end": "REFSm3/[RUN]/refsm3_",
            "archive_url": {
                "url_end": "RRFSm4/[RUN]/rrfsm4_",
                "end_date": "20241205"
            },
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "REFSm4": {
            "url_end": "REFSm4/[RUN]/refsm4_",
            "archive_url": {
                "url_end": "RRFSm5/[RUN]/rrfsm5_",
                "end_date": "20241205"
            },
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "REFSm5": {
            "url_end": "REFSm5/[RUN]/refsm5_",
            "archive_url": {
                "url_end": "RRFSm6/[RUN]/rrfsm6_",
                "end_date": "20241205"
            },
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 60,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sden": {"label": "1hr Snow/Liquid Ratio (Utah ML Method)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Panel", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip24vs": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "CAPS Det. (FV3)": {
            "url_end": "CAPSdet/[RUN]/capsdet_",
            "run_hrs": ["00"],
            "num_fcst_hrs": 84,
            "groups": [],
            "skip_display": ["experimental"],
            "experiment": ["wwe","ffair","all"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        },
        "CAPS MPAS": {
            "url_end": "CAPSmpas/[RUN]/capsmpas_",
            "run_hrs": ["00"],
            "num_fcst_hrs": 84,
            "groups": [],
            "skip_display": ["experimental"],
            "experiment": ["wwe","ffair","all"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "QPF Exceedance of 1hr ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "QPF Exceedance of 3hr ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "QPF Exceedance of 6hr ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "QPF Exceedance of 24hr ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1, "display": ["winter"]},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "GFS": {
            "url_end": "GFS/[RUN]/gfs_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": {
                "default": 120,
                "experimental": 168
            },
            "groups": [],
            "display": ["default","experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 3, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip36": {"label": "36hr QPF", "min_fcst_hr": 36, "fcst_hr_step": 6, "display": ["experimental"]},
                    "precip48": {"label": "48hr QPF", "min_fcst_hr": 48, "fcst_hr_step": 6, "display": ["experimental"]},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}}
                },
                "Winter Weather": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}, "display": ["winter"]}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "td": {"label": "2m Dewpoint in C", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": {"default": 1, "experimental": 3}, "fcst_hr_step": {"default": 1, "experimental": 3}, "display": ["default","experimental"]}
                }
            }
        },
        "AR-AFS": {
            "url_end": "AR_AFS/[RUN]/ar_afs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 120,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "QPF": {
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "precip12": {"label": "12hr QPF", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip36": {"label": "36hr QPF", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "precip48": {"label": "48hr QPF", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 3, "fcst_hr_step": 3}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "td": {"label": "2m Dewpoint in C", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 3, "fcst_hr_step": 3}
                }
            }
        },
        "MPAS PEAR": {
            "url_end": "MPAS_PEAR/[RUN]/mpas_pear_",
            "run_hrs": ["00"],
            "num_fcst_hrs": 120,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "QPF": {
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "precip12": {"label": "12hr QPF", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip36": {"label": "36hr QPF", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "precip48": {"label": "48hr QPF", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },
                "Snow": {
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "snow36": {"label": "36hr Snowfall (Var. Density)", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "snow48": {"label": "48hr Snowfall (Var. Density)", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },
                "Winter": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 3, "fcst_hr_step": 3}
                },
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "refl_ptype": {"label": "Reflectivity and Precipitation Type", "min_fcst_hr": 3, "fcst_hr_step": 3}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "td": {"label": "2m Dewpoint in C", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 3, "fcst_hr_step": 3}
                }
            }
        },
        "West-WRF": {
            "url_end": "WEST_WRF/[RUN]/west_wrf_",
            "run_hrs": ["00"],
            "num_fcst_hrs": 168,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "QPF": {
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "precip12": {"label": "12hr QPF", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip36": {"label": "36hr QPF", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "precip48": {"label": "48hr QPF", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },
                "Snow": {
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "swe36": {"label": "36hr Snow Water Equiv.", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "swe48": {"label": "48hr Snow Water Equiv.", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 3, "fcst_hr_step": 3}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 3, "fcst_hr_step": 3}
                }
            }
        },
        "UUtah CTL": {
            "url_end": "UTAH/[RUN]/utahctl_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 60,
            "groups": [],
            "display": ["winter"],
            "experiment": ["wwe","all"],
            "parameters": {
                "QPF": {
                    "precip6": {"label": "6hr QPF (RRFSp1)", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF (RRFSp1)", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "Snow": {
                    "snow6": {"label": "6hr Snowfall (ML SLR)", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "snow24": {"label": "24hr Snowfall (ML SLR)", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "slr": {"label": "1hr Snow/Liquid Ratio (ML SLR)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                },
                "Winter Weather - Environment": {
                    "wbz": {"label": "1hr Inst. Wet-Bulb 0.5degC Height", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        },
        "NSSL MPAS": {
            "url_end": "NSSL/[RUN]/nssl_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 48,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["wwe", "ffair","all"],
            "parameters": {
                "24hr Precip.": {
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "6hr Precip.": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "frozr6": {"label": "6hr Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1}
                },	
                "1hr Precip.": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "frozr1": {"label": "1hr Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },	
                "QPF": {
                    "precip1": {"label": "1hr QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "precip3": {"label": "3hr QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "precip20": {"label": "20hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "prate": {"label": "1hr Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmax": {"label": "1hr Max. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari1": {"label": "1hr QPF ARI", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ari3": {"label": "3hr QPF ARI", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "ari6": {"label": "6hr QPF ARI", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "ari24": {"label": "24hr QPF ARI", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "1km AGL Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Severe Weather": {
                    "cape": {"label": "1hr MUCAPE (255-0mb layer)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "uh": {"label": "1hr Min/Max Updraft Helicity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature (degC) with MSLP", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "td": {"label": "2m Dewpoint", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen850": {"label": "850mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv850": {"label": "850mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fgen700": {"label": "700mb Frontogenesis and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "tadv700": {"label": "700mb Temp. Advection and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "wind300": {"label": "300mb Wind and Geo. Height", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "snow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "snow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "snow6": {"label": "6hr Snowfall (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "snow24": {"label": "24hr Snowfall (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "snod1": {"label": "1hr Snow Depth Change", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "snod3": {"label": "3hr Snow Depth Change", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "snod6": {"label": "6hr Snow Depth Change", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "snod24": {"label": "24hr Snow Depth Change", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "swe1": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "swe3": {"label": "3hr Snow Water Equiv.", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "swe6": {"label": "6hr Snow Water Equiv.", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "swe24": {"label": "24hr Snow Water Equiv.", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "slr1": {"label": "1hr Snow/Liquid Ratio", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "snowc": {"label": "Snow Cover", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Ice Pellets": {
                    "frozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr6": {"label": "6h Ice Pellet QPF", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "frozr24": {"label": "24h Ice Pellet QPF", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "ptype": {"label": "1hr Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "frzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "frzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "frzr6": {"label": "6hr Freezing Rain QPF", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "frzr24": {"label": "24hr Freezing Rain QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "fram1": {"label": "1hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fram3": {"label": "3hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "fram6": {"label": "6hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "fram24": {"label": "24hr Freezing Rain Acc. Model (Flat Ice)", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },
                "Winter Weather - Environment": {
                    "vis": {"label": "1hr Surface Visibility", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "dgz": {"label": "1hr Dendritic Growth Zone Depth", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "frz": {"label": "1hr Freezing Level", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "les": {"label": "Ice Cover and 850mb-Sfc. Temp. Difference", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Verification": {
                    "precip24v": {"label": "24h QPF Verification", "min_fcst_hr" : 24, "fcst_hr_step": 6},
                    "precip6v": {"label": "6h QPF Verification", "min_fcst_hr" : 6, "fcst_hr_step": 1}
                }
            }
        }
    },
    "subModels": {
        "HRRR15": {
            "url_end": "HRRR/[RUN]/hrrr_",
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "num_fcst_hrs": 72,
            "subhour": true,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "subhprecip15": {"label": "15min QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhmax15precip": {"label": "Max 15min QPF in an Hour", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhprate15": {"label": "15min Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhprecip1": {"label": "1h QPF", "min_fcst_hr": 4, "fcst_hr_step": 1},
                    "subhprecip3": {"label": "3h QPF", "min_fcst_hr": 12, "fcst_hr_step": 1}
                },	
                "Reflectivity": {
                    "subhrefc15": {"label": "15min Composite Reflectivity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "RRFS15": {
            "url_end": "RRFS/[RUN]/rrfs_",
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "num_fcst_hrs": 72,
            "subhour": true,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "QPF": {
                    "subhprecip15": {"label": "15min QPF", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhmax15precip": {"label": "Max 15min QPF in an Hour", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhprate15": {"label": "15min Inst. Precip. Rate", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhprecip1": {"label": "1h QPF", "min_fcst_hr": 4, "fcst_hr_step": 1},
                    "subhprecip3": {"label": "3h QPF", "min_fcst_hr": 12, "fcst_hr_step": 1}
                },	
                "Reflectivity": {
                    "refc15": {"label": "15min Composite Reflectivity", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Snow": {
                    "subhsnow15": {"label": "15min Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhmax15snow": {"label": "Max 15min Snowfall (Var. Density) in an Hour", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhsnow1": {"label": "1hr Snowfall (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhsnow3": {"label": "3hr Snowfall (Var. Density)", "min_fcst_hr": 4, "fcst_hr_step": 1},
                    "subhswe15": {"label": "1hr Snow Water Equiv.", "min_fcst_hr": 12, "fcst_hr_step": 1}
                },
                "Ice Pellets": {
                    "subhfrozr15": {"label": "15min Ice Pellet QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "subhmax15frozr": {"label": "Max 15min Ice Pellet QPF in an Hour", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "subhfrozr1": {"label": "1h Ice Pellet QPF", "min_fcst_hr": 4, "fcst_hr_step": 1, "display": ["winter"]},
                    "subhfrozr3": {"label": "3h Ice Pellet QPF", "min_fcst_hr": 12, "fcst_hr_step": 1, "display": ["winter"]}
                },
                "Freezing Rain": {
                    "subhptype15": {"label": "15min Precipitation Type", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "subhfrzr15": {"label": "15min Freezing Rain QPF", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "subhmax15frzrr": {"label": "Max 15min Freezing Rain QPF in an Hour", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "subhfrzr1": {"label": "1hr Freezing Rain QPF", "min_fcst_hr": 4, "fcst_hr_step": 1},
                    "subhfrzr3": {"label": "3hr Freezing Rain QPF", "min_fcst_hr": 12, "fcst_hr_step": 1}
                }
            }
        }
    },
    "ai_models": {
        "GraphCast-GFS": {
            "url_end": "GRAPHCAST_GFS/[RUN]/graphcast_gfs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 168,
            "groups": [],
            "parameters": {
                "QPF": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "precip12": {"label": "12hr QPF", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip36": {"label": "36hr QPF", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "precip48": {"label": "48hr QPF", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },	
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        },
        "GraphCast-IFS": {
            "url_end": "GRAPHCAST_IFS/[RUN]/graphcast_ifs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 168,
            "groups": [],
            "parameters": {
                "QPF": {
                    "precip6": {"label": "6hr QPF", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "precip12": {"label": "12hr QPF", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "precip24": {"label": "24hr QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "precip36": {"label": "36hr QPF", "min_fcst_hr": 36, "fcst_hr_step": 6},
                    "precip48": {"label": "48hr QPF", "min_fcst_hr": 48, "fcst_hr_step": 6}
                },	
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        },
        "Pangu-GFS": {
            "url_end": "PANGU_GFS/[RUN]/pangu_gfs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 168,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        },
        "Pangu-IFS": {
            "url_end": "PANGU_IFS/[RUN]/pangu_ifs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 168,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        },
        "FourCastNet-GFS": {
            "url_end": "FOURCAST_GFS/[RUN]/fourcast_gfs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 168,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        },
        "FourCastNet-IFS": {
            "url_end": "FOURCAST_IFS/[RUN]/fourcast_ifs_",
            "run_hrs": ["00","12"],
            "num_fcst_hrs": 168,
            "groups": [],
            "display": ["experimental"],
            "experiment": ["pear","all"],
            "parameters": {
                "Synoptic": {
                    "tmpc": {"label": "2m Temperature in C with MSLP", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "pwat": {"label": "Hourly Precipitable Water", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind850": {"label": "850mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing850": {"label": "850mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mixing700": {"label": "700mb Mixing Ratio, Temp., and Geo. Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "vort500": {"label": "500mb Heights and Absolute Vorticity", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wind300": {"label": "300mb Heights and Wind", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "ivt": {"label": "Integrated Vapor Transport (IVT)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }
            }
        }
    },
    "ensembles_PQPF": {
        "HREF": {
            "url_end": "HREF/[RUN]/href_",
            "num_fcst_hrs": 48,
            "run_hrs": ["00","06","12","18"],
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "24h Precip.": {
                    "mean24": {"label": "24hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "lpmm24": {"label": "24hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}, "display": ["winter"],
                    "snmean24": {"label": "24hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6h Precip.": {
                    "mean6": {"label": "6hr Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "pmm6": {"label": "6hr Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "lpmm6": {"label": "6hr Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean6": {"label": "6hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "QPF Mean": {
                    "mean1": {"label": "1hr Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mean3": {"label": "3hr Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "mean6": {"label": "6hr Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "mean12": {"label": "12hr Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "mean20": {"label": "20hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "mean24": {"label": "24hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF PMM": {
                    "pmm1": {"label": "1hr Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmm3": {"label": "3hr Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "pmm6": {"label": "6hr Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "pmm12": {"label": "12hr Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "pmm20": {"label": "20hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF LPMM": {
                    "lpmm1": {"label": "1hr Local Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "lpmm3": {"label": "3hr Local Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "lpmm6": {"label": "6hr Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "lpmm12": {"label": "12hr Local Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "lpmm20": {"label": "20hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "lpmm24": {"label": "24hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF Probs.": {
                    "0.5in1hr": {"label": "1hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1in1hr": {"label": "1hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "2in1hr": {"label": "1hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3in1hr": {"label": "1hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "0.5in3hr": {"label": "3hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "1in3hr": {"label": "3hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "2in3hr": {"label": "3hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "3in3hr": {"label": "3hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "5in3hr": {"label": "3hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "0.5in6hr": {"label": "6hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "1in6hr": {"label": "6hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "2in6hr": {"label": "6hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "3in6hr": {"label": "6hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "5in6hr": {"label": "6hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "0.5in12hr": {"label": "12hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "1in12hr": {"label": "12hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "2in12hr": {"label": "12hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "3in12hr": {"label": "12hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "5in12hr": {"label": "12hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "8in12hr": {"label": "12hr NProb. (~39 km) QPF > 8 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "0.5in24hr": {"label": "24hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "1in24hr": {"label": "24hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "2in24hr": {"label": "24hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "3in24hr": {"label": "24hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "5in24hr": {"label": "24hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "8in24hr": {"label": "24hr NProb. (~39 km) QPF > 8 in", "min_fcst_hr": 24, "fcst_hr_step": 3}
                },	
                "QPF EAS": {
                    "eas0.25in1hr": {"label": "1hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eas0.5in1hr": {"label": "1hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eas0.25in3hr": {"label": "3hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "eas0.5in3hr": {"label": "3hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "eas0.25in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas0.5in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas1in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas1in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas2in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 2 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas1in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "eas2in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 2 in", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "eas3in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 3 in", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "eas5in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 5 in", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF FFG Exceedance": {
                    "ffg1hr": {"label": "1hr NProb (~39 km) QPF Exceeding FFG", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ffg3hr": {"label": "3hr NProb (~39 km) QPF Exceeding FFG", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "ffg6hr": {"label": "6hr NProb (~39 km) QPF Exceeding FFG", "min_fcst_hr": 6, "fcst_hr_step": 3}
                },	
                "QPF ARI Exceedance": {
                    "2yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 2yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "5yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 5yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "10yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 10yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "100yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 100yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "2yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 2yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "5yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 5yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "10yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 10yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "100yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 100yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3}
                },	
                "Snow Mean": {
                    "snmean1": {"label": "1hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean3": {"label": "3hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean6": {"label": "6hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean12": {"label": "12hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 12, "fcst_hr_step": 6, "display": ["winter"]},
                    "snmean20": {"label": "24hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 24, "fcst_hr_step": 24, "display": ["winter"]},
                    "snmean24": {"label": "24hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "Precip. Type": {
                    "categorical": {"label": "1hr Categorical Precip. Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcrain": {"label": "1hr NProb. (~18 km) of Categorical Rain", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcsnow": {"label": "1hr NProb. (~18 km) of Categorical Snow", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcice": {"label": "1hr NProb. (~18 km) of Categorical Ice Pellets", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcfrz": {"label": "1hr NProb. (~18 km) of Categorical Freezing Rain", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Snow Probs.": {
                    "sn1in1hr": {"label": "1hr NProb. (~18 km) of Snowfall (10:1) > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sn3in1hr": {"label": "1hr NProb. (~18 km) of Snowfall (10:1) > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sn1in3hr": {"label": "3hr NProb. (~18 km) of Snowfall (10:1) > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sn3in3hr": {"label": "3hr NProb. (~18 km) of Snowfall (10:1) > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sn6in3hr": {"label": "3hr NProb. (~18 km) of Snowfall (10:1) > 6 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sn3in6hr": {"label": "6hr NProb. (~18 km) of Snowfall (10:1) > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "sn6in6hr": {"label": "6hr NProb. (~18 km) of Snowfall (10:1) > 6 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "sn12in6hr": {"label": "6hr NProb. (~18 km) of Snowfall (10:1) > 12 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]}
                },	
                "Snow EAS": {
                    "sneas1in1hr": {"label": "1hr Ens. Agreement Prob. of Snowfall (10:1) > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sneas3in1hr": {"label": "1hr Ens. Agreement Prob. of Snowfall (10:1) > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sneas1in3hr": {"label": "3hr Ens. Agreement Prob. of Snowfall (10:1) > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sneas3in3hr": {"label": "3hr Ens. Agreement Prob. of Snowfall (10:1) > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sneas3in6hr": {"label": "6hr Ens. Agreement Prob. of Snowfall (10:1) > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "sneas6in6hr": {"label": "6hr Ens. Agreement Prob. of Snowfall (10:1) > 6 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]}
                }
            }
        },
        "REFS": {
            "url_end": "REFS/[RUN]/refs_",
            "num_fcst_hrs": 60,
            "run_hrs": ["00","06","12","18"],
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "24h Precip.": {
                    "mean24": {"label": "24hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "lpmm24": {"label": "24hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "asnow24": {"label": "24hr Snowfall Mean (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snmean24": {"label": "24hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6h Precip.": {
                    "mean6": {"label": "6hr Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "pmm6": {"label": "6hr Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "lpmm6": {"label": "6hr Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow6": {"label": "6hr Snowfall Mean (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean6": {"label": "6hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "QPF Mean": {
                    "mean1": {"label": "1hr Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mean3": {"label": "3hr Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "mean6": {"label": "6hr Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "mean12": {"label": "12hr Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "mean20": {"label": "20hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "mean24": {"label": "24hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF PMM": {
                    "pmm1": {"label": "1hr Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmm3": {"label": "3hr Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "pmm6": {"label": "6hr Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "pmm12": {"label": "12hr Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "pmm20": {"label": "20hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF LPMM": {
                    "lpmm1": {"label": "1hr Local Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "lpmm3": {"label": "3hr Local Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "lpmm6": {"label": "6hr Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "lpmm12": {"label": "12hr Local Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "lpmm20": {"label": "20hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "lpmm24": {"label": "24hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF Probs.": {
                    "0.5in1hr": {"label": "1hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1in1hr": {"label": "1hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "2in1hr": {"label": "1hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3in1hr": {"label": "1hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "0.5in3hr": {"label": "3hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "1in3hr": {"label": "3hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "2in3hr": {"label": "3hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "3in3hr": {"label": "3hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "5in3hr": {"label": "3hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "0.5in6hr": {"label": "6hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "1in6hr": {"label": "6hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "2in6hr": {"label": "6hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "3in6hr": {"label": "6hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "5in6hr": {"label": "6hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "0.5in12hr": {"label": "12hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "1in12hr": {"label": "12hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "2in12hr": {"label": "12hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "3in12hr": {"label": "12hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "5in12hr": {"label": "12hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "8in12hr": {"label": "12hr NProb. (~39 km) QPF > 8 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "0.5in24hr": {"label": "24hr NProb. (~39 km) QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "1in24hr": {"label": "24hr NProb. (~39 km) QPF > 1 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "2in24hr": {"label": "24hr NProb. (~39 km) QPF > 2 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "3in24hr": {"label": "24hr NProb. (~39 km) QPF > 3 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "5in24hr": {"label": "24hr NProb. (~39 km) QPF > 5 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "8in24hr": {"label": "24hr NProb. (~39 km) QPF > 8 in", "min_fcst_hr": 24, "fcst_hr_step": 3}
                },	
                "QPF EAS": {
                    "eas0.25in1hr": {"label": "1hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eas0.5in1hr": {"label": "1hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eas1in1hr": {"label": "1hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eas0.25in3hr": {"label": "3hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "eas0.5in3hr": {"label": "3hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "eas1in3hr": {"label": "3hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "eas2in3hr": {"label": "3hr Ens. Agreement QPF Probs. > 2 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "eas0.25in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas0.5in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas1in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas2in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas3in6hr": {"label": "6hr Ens. Agreement QPF Probs. > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "eas0.25in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas0.5in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas1in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas2in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 2 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas3in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 3 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas5in12hr": {"label": "12hr Ens. Agreement QPF Probs. > 5 in", "min_fcst_hr": 12, "fcst_hr_step": 3},
                    "eas0.25in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 0.25 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "eas0.5in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 0.5 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "eas1in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 1 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "eas2in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 2 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "eas3in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 3 in", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "eas5in24hr": {"label": "24hr Ens. Agreement QPF Probs. > 5 in", "min_fcst_hr": 24, "fcst_hr_step": 3}
                },	
                "QPF FFG Exceedance": {
                    "ffg1hr": {"label": "1hr NProb (~39 km) QPF Exceeding FFG", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ffg3hr": {"label": "3hr NProb (~39 km) QPF Exceeding FFG", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "ffg6hr": {"label": "6hr NProb (~39 km) QPF Exceeding FFG", "min_fcst_hr": 6, "fcst_hr_step": 3}
                },	
                "QPF ARI Exceedance": {
                    "1yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 1yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "2yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 2yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "5yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 5yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "10yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 10yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "25yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 25yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "50yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 50yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "100yrari6hr": {"label": "6hr NProb (~39 km) QPF Exceeding 100yr ARI", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "1yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 1yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "2yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 2yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "5yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 5yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "10yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 10yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "25yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 25yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "50yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 50yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3},
                    "100yrari24hr": {"label": "24hr NProb (~39 km) QPF Exceeding 100yr ARI", "min_fcst_hr": 24, "fcst_hr_step": 3}
                },
                "Snow Mean": {
                    "snmean1": {"label": "1hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean3": {"label": "3hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean6": {"label": "6hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snmean12": {"label": "12hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 12, "fcst_hr_step": 6, "display": ["winter"]},
                    "snmean20": {"label": "20hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 24, "fcst_hr_step": 24, "display": ["winter"]},
                    "snmean24": {"label": "24hr Snowfall Mean (10:1 SLR)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "asnow1": {"label": "1hr Snowfall Mean (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow3": {"label": "3hr Snowfall Mean (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow6": {"label": "6hr Snowfall Mean (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow12": {"label": "12hr Snowfall Mean (Var. Density)", "min_fcst_hr": 12, "fcst_hr_step": 6, "display": ["winter"]},
                    "asnow20": {"label": "20hr Snowfall Mean (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 24, "display": ["winter"]},
                    "asnow24": {"label": "24hr Snowfall Mean (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "Precip. Type": {
                    "categorical": {"label": "1hr Categorical Precip. Type", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcrain": {"label": "1hr NProb. (~18 km) of Categorical Rain", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcsnow": {"label": "1hr NProb. (~18 km) of Categorical Snow", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcice": {"label": "1hr NProb. (~18 km) of Categorical Ice Pellets", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "probcfrz": {"label": "1hr NProb. (~18 km) of Categorical Freezing Rain", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]}
                },	
                "Snow Probs.": {
                    "ts1in1hr": {"label": "1hr NProb. (~18 km) of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ts3in1hr": {"label": "1hr NProb. (~18 km) of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ts1in3hr": {"label": "3hr NProb. (~18 km) of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts3in3hr": {"label": "3hr NProb. (~18 km) of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts6in3hr": {"label": "3hr NProb. (~18 km) of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts3in6hr": {"label": "6hr NProb. (~18 km) of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts6in6hr": {"label": "6hr NProb. (~18 km) of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts12in6hr": {"label": "6hr NProb. (~18 km) of Snowfall (Var. Density) > 12 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts3in12hr": {"label": "12hr NProb. (~18 km) of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts6in12hr": {"label": "12hr NProb. (~18 km) of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts12in12hr": {"label": "12hr NProb. (~18 km) of Snowfall (Var. Density) > 12 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts18in12hr": {"label": "12hr NProb. (~18 km) of Snowfall (Var. Density) > 18 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts6in24hr": {"label": "24hr NProb. (~18 km) of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 24, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts12in24hr": {"label": "24hr NProb. (~18 km) of Snowfall (Var. Density) > 12 in", "min_fcst_hr": 24, "fcst_hr_step": 3, "display": ["winter"]},
                    "ts18in24hr": {"label": "24hr NProb. (~18 km) of Snowfall (Var. Density) > 18 in", "min_fcst_hr": 24, "fcst_hr_step": 3, "display": ["winter"]}
                },	
                "Snow EAS": {
                    "sneas1in1hr": {"label": "1hr Ens. Agreement Prob. of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sneas3in1hr": {"label": "1hr Ens. Agreement Prob. of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "sneas1in3hr": {"label": "3hr Ens. Agreement Prob. of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sneas3in3hr": {"label": "3hr Ens. Agreement Prob. of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "sneas3in6hr": {"label": "6hr Ens. Agreement Prob. of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "sneas6in6hr": {"label": "6hr Ens. Agreement Prob. of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]}
                },
                "Freezing Rain Probs.": {
                    "frzprob0.01in1hr": {"label": "1hr NProb. (~18 km) of FZRA QPF > 0.01 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzprob0.1in1hr": {"label": "1hr NProb. (~18 km) of FZRA QPF > 0.1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzprob0.25in1hr": {"label": "1hr NProb. (~18 km) of FZRA QPF > 0.25 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "frzprob0.01in3hr": {"label": "3hr NProb. (~18 km) of FZRA QPF > 0.01 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.1in3hr": {"label": "3hr NProb. (~18 km) of FZRA QPF > 0.1 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.25in3hr": {"label": "3hr NProb. (~18 km) of FZRA QPF > 0.25 in", "min_fcst_hr": 3, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.01in6hr": {"label": "6hr NProb. (~18 km) of FZRA QPF > 0.01 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.1in6hr": {"label": "6hr NProb. (~18 km) of FZRA QPF > 0.1 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.25in6hr": {"label": "6hr NProb. (~18 km) of FZRA QPF > 0.25 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.5in6hr": {"label": "6hr NProb. (~18 km) of FZRA QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.01in12hr": {"label": "12hr NProb. (~18 km) of FZRA QPF > 0.01 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.1in12hr": {"label": "12hr NProb. (~18 km) of FZRA QPF > 0.1 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.25in12hr": {"label": "12hr NProb. (~18 km) of FZRA QPF > 0.25 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]},
                    "frzprob0.5in12hr": {"label": "12hr NProb. (~18 km) of FZRA QPF > 0.5 in", "min_fcst_hr": 12, "fcst_hr_step": 3, "display": ["winter"]}
                }	
            }
        },
        "CAPS Ens.": {
            "url_end": "CAPS/[RUN]/caps_",
            "num_fcst_hrs": 84,
            "run_hrs": ["00"],
            "groups": [],
            "skip_display": ["experimental"],
            "experiment": ["ffair","wwe","all"],
            "parameters": {
                "24h Precip.": {
                    "mean24": {"label": "24hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "lpmm24": {"label": "24hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "asnow24": {"label": "24hr Snowfall Mean (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snpmm24": {"label": "24hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]},
                    "snlpmm24": {"label": "24hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "6h Precip.": {
                    "mean6": {"label": "6hr Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "pmm6": {"label": "6hr Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "lpmm6": {"label": "6hr Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "sam6": {"label": "6hr Spatially Aligned Mean", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "samlpm6": {"label": "6hr Spatially Aligned and Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "asnow6": {"label": "6hr Snowfall Mean (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snpmm6": {"label": "6hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snlpmm6": {"label": "6hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snsam6": {"label": "6hr Snowfall Spatially Aligned Mean", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "snsamlpm6": {"label": "6hr Snowfall Spatially Aligned and Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "snmlpmean6": {"label": "6hr ML Mean Snowfall", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "QPF Mean": {
                    "mean1": {"label": "1hr Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "mean3": {"label": "3hr Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "mean6": {"label": "6hr Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "mean12": {"label": "12hr Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "mean20": {"label": "20hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 24},
                    "mean24": {"label": "24hr Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF PMM": {
                    "pmm1": {"label": "1hr Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "pmm3": {"label": "3hr Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "pmm6": {"label": "6hr Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "pmm12": {"label": "12hr Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "pmm20": {"label": "20hr Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 24},
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF LPMM": {
                    "lpmm1": {"label": "1hr Local Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "lpmm3": {"label": "3hr Local Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1},
                    "lpmm6": {"label": "6hr Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1},
                    "lpmm12": {"label": "12hr Local Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6},
                    "lpmm20": {"label": "20hr Local Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 24},
                    "lpmm24": {"label": "24hr Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "QPF SAM": {
                    "sam6": {"label": "6hr Spatially Aligned Mean", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "samlpm6": {"label": "6hr Spatially Aligned and Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 6}
                },	
                "QPF Probs.": {
                    "0.5in1hr": {"label": "1hr NProb. QPF > 0.5 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1in1hr": {"label": "1hr NProb. QPF > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "2in1hr": {"label": "1hr NProb. QPF > 2 in", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "0.5in3hr": {"label": "3hr NProb. QPF > 0.5 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "1in3hr": {"label": "3hr NProb. QPF > 1 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "2in3hr": {"label": "3hr NProb. QPF > 2 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "3in3hr": {"label": "3hr NProb. QPF > 3 in", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "0.5in6hr": {"label": "6hr NProb. QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "1in6hr": {"label": "6hr NProb. QPF > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "2in6hr": {"label": "6hr NProb. QPF > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "3in6hr": {"label": "6hr NProb. QPF > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "0.5in12hr": {"label": "12hr NProb. QPF > 0.5 in", "min_fcst_hr": 12, "fcst_hr_step": 12},
                    "1in12hr": {"label": "12hr NProb. QPF > 1 in", "min_fcst_hr": 12, "fcst_hr_step": 12},
                    "2in12hr": {"label": "12hr NProb. QPF > 2 in", "min_fcst_hr": 12, "fcst_hr_step": 12},
                    "3in12hr": {"label": "12hr NProb. QPF > 3 in", "min_fcst_hr": 12, "fcst_hr_step": 12},
                    "5in12hr": {"label": "12hr NProb. QPF > 5 in", "min_fcst_hr": 12, "fcst_hr_step": 12},
                    "0.5in24hr": {"label": "24hr NProb. QPF > 0.5 in", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "1in24hr": {"label": "24hr NProb. QPF > 1 in", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "2in24hr": {"label": "24hr NProb. QPF > 2 in", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "3in24hr": {"label": "24hr NProb. QPF > 3 in", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "5in24hr": {"label": "24hr NProb. QPF > 5 in", "min_fcst_hr": 24, "fcst_hr_step": 12}
                },	
                "QPF FFG Exceedance": {
                    "ffg1hr": {"label": "1hr NProb QPF Exceeding FFG", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ffg3hr": {"label": "3hr NProb QPF Exceeding FFG", "min_fcst_hr": 3, "fcst_hr_step": 3},
                    "ffg6hr": {"label": "6hr NProb QPF Exceeding FFG", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "ffg24hr": {"label": "24hr NProb QPF Exceeding FFG", "min_fcst_hr": 24, "fcst_hr_step": 24}
                },	
                "Snow Mean": {
                    "asnow1": {"label": "1hr Snowfall Mean (Var. Density)", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow3": {"label": "3hr Snowfall Mean (Var. Density)", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow6": {"label": "6hr Snowfall Mean (Var. Density)", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "asnow12": {"label": "12hr Snowfall Mean (Var. Density)", "min_fcst_hr": 12, "fcst_hr_step": 6, "display": ["winter"]},
                    "asnow20": {"label": "20hr Snowfall Mean (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 24, "display": ["winter"]},
                    "asnow24": {"label": "24hr Snowfall Mean (Var. Density)", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "Snow PMM": {
                    "snpmm1": {"label": "1hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snpmm3": {"label": "3hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snpmm6": {"label": "6hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snpmm12": {"label": "12hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6, "display": ["winter"]},
                    "snpmm20": {"label": "20hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 24, "display": ["winter"]},
                    "snpmm24": {"label": "24hr Snowfall (Var. Density) Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "Snow LPMM": {
                    "snlpmm1": {"label": "1hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "snlpmm3": {"label": "3hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 3, "fcst_hr_step": 1, "display": ["winter"]},
                    "snlpmm6": {"label": "6hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 1, "display": ["winter"]},
                    "snlpmm12": {"label": "12hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 12, "fcst_hr_step": 6, "display": ["winter"]},
                    "snlpmm20": {"label": "20hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 24, "display": ["winter"]},
                    "snlpmm24": {"label": "24hr Snowfall (Var. Density) Local Prob. Matched Mean", "min_fcst_hr": 24, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "Snow SAM": {
                    "snsam6": {"label": "6hr Snowfall Spatially Aligned Mean", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "snsamlpm6": {"label": "6hr Snowfall Spatially Aligned and Local Prob. Matched Mean", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]}
                },	
                "Snow Probs.": {
                    "ts0.1in1hr": {"label": "1hr NProb. of Snowfall (Var. Density) > 0.1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ts1in1hr": {"label": "1hr NProb. of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ts2in1hr": {"label": "1hr NProb. of Snowfall (Var. Density) > 2 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ts3in1hr": {"label": "1hr NProb. of Snowfall (Var. Density) > 3 in", "min_fcst_hr": 1, "fcst_hr_step": 1, "display": ["winter"]},
                    "ts0.1in6hr": {"label": "6hr NProb. of Snowfall (Var. Density) > 0.1 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "ts1in6hr": {"label": "6hr NProb. of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "ts2in6hr": {"label": "6hr NProb. of Snowfall (Var. Density) > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "ts4in6hr": {"label": "6hr NProb. of Snowfall (Var. Density) > 4 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "ts6in6hr": {"label": "6hr NProb. of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "ts0.1in24hr": {"label": "24hr NProb. of Snowfall (Var. Density) > 0.1 in", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "ts1in24hr": {"label": "24hr NProb. of Snowfall (Var. Density) > 1 in", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "ts2in24hr": {"label": "24hr NProb. of Snowfall (Var. Density) > 2 in", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "ts4in24hr": {"label": "24hr NProb. of Snowfall (Var. Density) > 4 in", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "ts6in24hr": {"label": "24hr NProb. of Snowfall (Var. Density) > 6 in", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]}
                }	
            }
        },
        "CAPS ML Ensemble": {
            "url_end": "CAPS/[RUN]/caps_",
            "num_fcst_hrs": 36,
            "run_hrs": ["00"],
            "groups": [],
            "experiment": ["ffair", "wwe","all"],
            "parameters": {
                "QPF": {
                    "mlpmean6": {"label": "6hr ML Mean QPF", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["summer"]},
                    "mlp0.5in6h": {"label": "6hr ML NProb. of QPF > 0.5 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["summer"]},
                    "mlp1in6h": {"label": "6hr ML NProb. of QPF > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["summer"]},
                    "mlp2in6h": {"label": "6hr ML NProb. of QPF > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["summer"]}
                },
                "Snow": {
                    "snmlpmean6": {"label": "6hr ML Mean Snowfall", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "mlp1in6h": {"label": "6hr ML NProb. of Snowfall > 1 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "mlp2in6h": {"label": "6hr ML NProb. of Snowfall > 2 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]},
                    "mlp3in6h": {"label": "6hr ML NProb. of Snowfall > 3 in", "min_fcst_hr": 6, "fcst_hr_step": 6, "display": ["winter"]}
                }	
            }
        },
        "WPC": {
            "url_end": "WPC_PQPF/[RUN]/wpc_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 96,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "PQPF": {
                    "90pqpf6": {"label": "6hr QPF 90 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "95pqpf6": {"label": "6hr QPF 95 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "90pqpf24": {"label": "24hr QPF 90 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "95pqpf24": {"label": "24hr QPF 95 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6}
                },
                "PWPF": {
                    "90snow24": {"label": "24hr Snow 90 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "95snow24": {"label": "24hr Snow 95 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "90ice24": {"label": "24hr Ice 90 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]},
                    "95ice24": {"label": "24hr Ice 95 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12, "display": ["winter"]}
                }
            }
        },
        "NBM": {
            "url_end": "NBM/[RUN]/nbm_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 168,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "PQPF": {
                    "90pqpf6": {"label": "6hr QPF 90 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "95pqpf6": {"label": "6hr QPF 95 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "99pqpf6": {"label": "6hr QPF 99 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "90pqpf24": {"label": "24hr QPF 90 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "95pqpf24": {"label": "24hr QPF 95 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "99pqpf24": {"label": "24hr QPF 99 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 6}
                }
            }
        },
        "NBMX": {
            "url_end": "NBMX/[RUN]/nbmx_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 90,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "PQPF": {
                    "90pqpf6": {"label": "6hr QPF 90 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "95pqpf6": {"label": "6hr QPF 95 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "100pqpf6": {"label": "6hr QPF 100 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "90pqpf24": {"label": "24hr QPF 90 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "95pqpf24": {"label": "24hr QPF 95 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "100pqpf24": {"label": "24hr QPF 100 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },
                "QPF PMM": { 
                    "pmm24": {"label": "24hr Prob. Matched Mean", "min_fcst_hr" : 24, "fcst_hr_step": 6}
                }
            }
        },
        "GEFS": {
            "url_end": "GEFS/[RUN]/gefs_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 168,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "PQPF": {
                    "90pqpf6": {"label": "6hr QPF 90 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "95pqpf6": {"label": "6hr QPF 95 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "99pqpf6": {"label": "6hr QPF 99 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 3},
                    "90pqpf24": {"label": "24hr QPF 90 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "95pqpf24": {"label": "24hr QPF 95 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "99pqpf24": {"label": "24hr QPF 99 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12}
                }
            }
        },
        "GEFSAI": {
            "url_end": "GEFSAI/[RUN]/gefsai_",
            "run_hrs": ["00","06","12","18"],
            "num_fcst_hrs": 168,
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "PQPF": {
                    "90pqpf6": {"label": "6hr QPF 90 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "95pqpf6": {"label": "6hr QPF 95 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "99pqpf6": {"label": "6hr QPF 99 Percentile", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "90pqpf24": {"label": "24hr QPF 90 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "95pqpf24": {"label": "24hr QPF 95 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12},
                    "99pqpf24": {"label": "24hr QPF 99 Percentile", "min_fcst_hr": 24, "fcst_hr_step": 12}
                }
            }
        },
        "UUtah ML Ensemble": {
            "url_end": "UTAH/[RUN]/utahens_",
            "num_fcst_hrs": 60,
            "run_hrs": ["00","12"],
            "groups": [],
            "display": ["winter"],
            "experiment": ["wwe","all"],
            "parameters": {
                "REFS QPF": {
                    "min6": {"label": "6hr Ens. Min. QPF", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "mean6": {"label": "6hr Mean QPF", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "max6": {"label": "6hr Ens. Max. QPF", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "diff6": {"label": "6hr Ens. Range QPF (Max-Min)", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "min24": {"label": "24hr Ens. Min. QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "mean24": {"label": "24hr Mean QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "max24": {"label": "24hr Ens. Max. QPF", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "diff24": {"label": "24hr Ens. Range QPF (Max-Min)", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "ML SLR": {
                    "slrmin": {"label": "1hr Ens. Min. SLR", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "slrmean": {"label": "1hr Mean SLR", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "slrmax": {"label": "1hr Ens. Max. SLR", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "slrdiff": {"label": "1hr Ens. Range SLR (Max-Min)", "min_fcst_hr": 6, "fcst_hr_step": 6}
                },	
                "ML Snow": {
                    "snmin6": {"label": "6hr Ens. Min. Snow", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "snmean6": {"label": "6hr Mean Snow", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "snmax6": {"label": "6hr Ens. Max. Snow", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "sndiff6": {"label": "6hr Ens. Range Snow (Max-Min)", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "snmin24": {"label": "24hr Ens. Min. Snow", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "snmean24": {"label": "24hr Mean Snow", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "snmax24": {"label": "24hr Ens. Max. Snow", "min_fcst_hr": 24, "fcst_hr_step": 6},
                    "sndiff24": {"label": "24hr Ens. Range Snow (Max-Min)", "min_fcst_hr": 24, "fcst_hr_step": 6}
                },	
                "Winter Weather - Environment": {
                    "wbzmin": {"label": "1hr Inst. Ens. Min. Wet-Bulb 0.5degC Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wbzmean": {"label": "1hr Inst. Ens. Mean Wet-Bulb 0.5degC Height", "min_fcst_hr": 6, "fcst_hr_step": 6},
                    "wbzmax": {"label": "1hr Inst. Ens. Max. Wet-Bulb 0.5degC Height", "min_fcst_hr": 6, "fcst_hr_step": 6}
                }	
            }
        },
        "ISU ML Ensemble": {
            "url_end": "",
            "url_full_path": "https://meteor.geol.iastate.edu/~tyreek/FFAIR/[RUN]/isu_[PARAMETER]_[RUN].png",
            "num_fcst_hrs": 1,
            "display_slider": false,
            "run_hrs": ["12"],
            "groups": [],
            "experiment": ["ffair","all"],
            "parameters": {
                "ML Ensemble": {
                    "fullmladj_PMM": {"label": "PMM", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_ENS_MEAN": {"label": "Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_POE_1in": {"label": "24h Prob of Exceed 1in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_POE_2in": {"label": "24h Prob of Exceed 2in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_POE_3in": {"label": "24h Prob of Exceed 3in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_POE_4in": {"label": "24h Prob of Exceed 4in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_POE_5in": {"label": "24h Prob of Exceed 5in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "fullmladj_POE_8in": {"label": "24h Prob of Exceed 8in ", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "HREF": {
                    "original_PMM": {"label": "PMM", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_ENS_MEAN": {"label": "Mean", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_POE_1in": {"label": "24h Prob of Exceed 1in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_POE_2in": {"label": "24h Prob of Exceed 2in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_POE_3in": {"label": "24h Prob of Exceed 3in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_POE_4in": {"label": "24h Prob of Exceed 4in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_POE_5in": {"label": "24h Prob of Exceed 5in ", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "original_POE_8in": {"label": "24h Prob of Exceed 8in ", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "ISU ML Members": {
            "url_end": "",
            "url_full_path": "https://meteor.geol.iastate.edu/~tyreek/FFAIR/[RUN]/isu_fullmladj_[PARAMETER]_[CYCLE:INT]Z_[RUN].png",
            "num_fcst_hrs": 1,
            "display_slider": false,
            "run_hrs": ["00","12"],
            "groups": [],
            "experiment": ["ffair","all"],
            "parameters": {
                "Models": {
                    "HRRR": {"label": "HRRR", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ARW": {"label": "ARW", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "ARW2": {"label": "ARW2", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "NAM": {"label": "NAM Nest", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        }
    },
    "obs": {
        "Precipitation": {
            "url_end": "OBS/[VALID]/obs_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "parameters": {
                "MRMS QPE Pass2 Totals": {
                    "precip1": {"label": "MRMS Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "precip3": {"label": "MRMS 3-Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "precip6": {"label": "MRMS 6-Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "precip20": {"label": "MRMS 20-Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "precip24": {"label": "MRMS 24-Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "precip48": {"label": "MRMS 48-Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "precip72": {"label": "MRMS 72-Hourly Precipitation", "min_fcst_hr": 0, "fcst_hr_step": 6}
                },
                "MRMS QPE Pass1": {
                    "prad0": {"label": "MRMS 15m Precipitation", "min_fcst_hr": 0 ,"fcst_hr_step": 1 },
                    "prad1": {"label": "MRMS Hourly Precipitation", "min_fcst_hr": 0 ,"fcst_hr_step": 1 },
                    "prad3": {"label": "MRMS 3-Hourly Precipitation", "min_fcst_hr": 0 ,"fcst_hr_step": 1 }
                },
                "MRMS Precip Rates": {
                    "prate1": {"label": "Insta. Precip Rate", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "pmax1": {"label": "Hourly Max Precip Rate", "min_fcst_hr": 0, "fcst_hr_step": 1}
                }
            }
        },
        "Precipitation Exceedance/Duration": {
            "url_end": "OBS/[VALID]/obs_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "parameters": {
                "MRMS ARI Exceedance": {
                    "ari1": {"label": "MRMS QPE Exceeding 1hr ARI", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ari3": {"label": "MRMS QPE Exceeding 3hr ARI", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ari6": {"label": "MRMS QPE Exceeding 6hr ARI", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ari24": {"label": "MRMS QPE Exceeding 24hr ARI", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "ari48": {"label": "MRMS QPE Exceeding 48hr ARI", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "ari72": {"label": "MRMS QPE Exceeding 72hr ARI", "min_fcst_hr": 0, "fcst_hr_step": 6}
                },
                "MRMS Duration": {
                    "duration3": {"label": "Duration of Half Inch of MRMS QPE in 3h", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "duration6": {"label": "Duration of Half Inch of MRMS QPE in 6h", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "duration24": {"label": "Duration of Half Inch of MRMS QPE in 24h", "min_fcst_hr": 0, "fcst_hr_step": 24}
                },
                "MRMS probs": {
                    "0.5in6hr": {"label": "Prob of Half Inch/6hr MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "0.5in6hrs": {"label": "Smooth Prob of Half Inch/6hr of MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "1in6hr": {"label": "Prob of One Inch/6hr MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "1in6hrs": {"label": "Smooth Prob of One Inch/6hr of MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "2in6hr": {"label": "Prob of Two Inch/6hr MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "2in6hrs": {"label": "Smooth Prob of Two Inch/6hr of MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "3in6hr": {"label": "Prob of Three Inch/6hr MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "3in6hrs": {"label": "Smooth Prob of Three Inch/6hr of MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "5in6hr": {"label": "Prob of Five Inch/6hr MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3},
                    "5in6hrs": {"label": "Smooth Prob of Five Inch/6hr of MRMS QPE", "min_fcst_hr": 0, "fcst_hr_step": 3}
                }
            }
        },
        "MRMS Reflectivity": {
            "url_end": "OBS/[VALID]/obs_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "parameters": {
                "Reflectivity": {
                    "refc1": {"label": "Composite Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "refl1": {"label": "Base Reflectivity", "min_fcst_hr": 0, "fcst_hr_step": 1}
                }
            }
        },
        "Snowfall": {
            "url_end": "OBS/[VALID]/obs_", 
            "num_fcst_hrs": 96,
            "archive": true,
            "run_hrs": ["00","06","12","18"],
            "groups": [],
            "display": ["winter"],
            "parameters": {
                "NOHRSC Snow": {
                    "snow6": {"label": "NOHRSC 6h Snowfall", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "snow24": {"label": "NOHRSC 24h Snowfall", "min_fcst_hr": 0, "fcst_hr_step": 12},
                    "snow48": {"label": "NOHRSC 48h Snowfall", "min_fcst_hr": 0, "fcst_hr_step": 12},
                    "snow72": {"label": "NOHRSC 72h Snowfall", "min_fcst_hr": 0, "fcst_hr_step": 12}
                }
            }
        },
        "Freezing Rain": {
            "url_end": "FRANA/[VALID]/frana3km_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "display": ["winter"],
            "parameters": {
                "FRANA (3 km)": {
                    "flat6": {"label": "FRANA 6h Flat Ice", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat24": {"label": "FRANA 24h Flat Ice", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat48": {"label": "FRANA 48h Flat Ice", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat72": {"label": "FRANA 72h Flat Ice", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat6bc": {"label": "FRANA_BC 6h Flat Ice (ASOS bias-corrected)", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat24bc": {"label": "FRANA_BC 24h Flat Ice (ASOS bias-corrected)", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat48bc": {"label": "FRANA_BC 48h Flat Ice (ASOS bias-corrected)", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat72bc": {"label": "FRANA_BC 72h Flat Ice (ASOS bias-corrected)", "min_fcst_hr": 0, "fcst_hr_step": 6}
                }
            }
        },
        "Freezing Rain (MRMS)": {
            "url_end": "FRANA/[VALID]/frana_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "display": ["winter"],
            "parameters": {
                "FRANA (MRMS, 1km)": {
                    "flat6": {"label": "FRANA 6h Flat Ice", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "flat24": {"label": "FRANA 24h Flat Ice", "min_fcst_hr": 0, "fcst_hr_step": 6}
                }
            }
        },
        "Precipitation Type": {
            "url_end": "MPING/[VALID]/mping_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "display": ["winter"],
            "parameters": {
                "mPING Reports": {
                    "ptype1": {"label": "mPING P-Types Last 1h", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ptype6": {"label": "mPING P-Types Last 6h", "min_fcst_hr": 0, "fcst_hr_step": 1}
                }
            }
        },
        "CIRA": {
            "url_end": "CIRA/[VALID]/cira_",
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": ["fac"],
            "display": ["experimental"],
            "parameters": {
                "CIRA Products": {
                    "alpw": {"label": "Layer PWAT", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "alpwrank": {"label": "Layer PWAT Percentile", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "lvt": {"label": "Layer Vapor Transport", "min_fcst_hr": 0, "fcst_hr_step": 3}
                }
            }
        },
        "Surface Observations": {
            "url_end": "OBS/[VALID]/obs_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "display": ["winter","summer"],
            "parameters": {
                "Surface": {
                    "sfc": {"label": "ASOS Dew Point and MSLP", "min_fcst_hr": 0, "fcst_hr_step": 1}
                },
                "Winter Weather Obs.": {
                    "ptype": {"label": "ASOS Precip. Type and LSRs", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "sfc": {"label": "ASOS Wet Bulb Temp. and MSLP", "min_fcst_hr": 0, "fcst_hr_step": 1}
                }
            }
        },
        "NWS Products": {
            "url_end": "OBS/[VALID]/obs_", 
            "num_fcst_hrs": 83,
            "archive": true,
            "run_hrs": ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            "groups": [],
            "parameters": {
                "Winter Weather MDs": {
                    "wwmcd3": {"label": "MDs Issued Last 3hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwmcd6": {"label": "MDs Issued Last 6hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwmcd20": {"label": "MDs Issued Last 20hr", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "wwmcd24": {"label": "MDs Issued Last 24hr", "min_fcst_hr": 0, "fcst_hr_step": 6}
                },
                "Flash Flood MDs": {
                    "ffmcd3": {"label": "MDs Issued Last 3hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffmcd6": {"label": "MDs Issued Last 6hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffmcd20": {"label": "MDs Issued Last 20hr", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "ffmcd24": {"label": "MDs Issued Last 24hr", "min_fcst_hr": 0, "fcst_hr_step": 6}
                },
                "NWS Watches, Warnings, Advisories": {
                    "wwwarn1": {"label": "Winter Warnings - Last 1hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwwarn3": {"label": "Winter Warnings - Last 3hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwwarn6": {"label": "Winter Warnings - Last 6hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwwarn24": {"label": "Winter Warnings - Last 24hr", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "wwwatch1": {"label": "Winter Watches - Last 1hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwwatch3": {"label": "Winter Watches - Last 3hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwwatch6": {"label": "Winter Watches - Last 6hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "wwwatch24": {"label": "Winter Watches - Last 24hr", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "ffwarn1": {"label": "Flash Flood Warnings - Last 1hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffwarn3": {"label": "Flash Flood Warnings - Last 3hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffwarn6": {"label": "Flash Flood Warnings - Last 6hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffwarn24": {"label": "Flash Flood Warnings - Last 24hr", "min_fcst_hr": 0, "fcst_hr_step": 6},
                    "ffwatch1": {"label": "Flash Flood Watches - Last 1hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffwatch3": {"label": "Flash Flood Watches - Last 3hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffwatch6": {"label": "Flash Flood Watches - Last 6hr", "min_fcst_hr": 0, "fcst_hr_step": 1},
                    "ffwatch24": {"label": "Flash Flood Watches - Last 24hr", "min_fcst_hr": 0, "fcst_hr_step": 6}
                }
            }
        }
    },
    "ero": {
        "WPC EROs": {
            "url_end": "WPC_EROs/[RUN]/ppERO_",
            "display_slider": false,
            "no_fhr_in_url": true,
            "num_fcst_hrs": 1,
            "run_hrs": ["00","06","12","18"],
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "WPC": {
                    "day0": {"label": "PQPF Day 0", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "day1": {"label": "PQPF Day 1", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "day2": {"label": "PQPF Day 2", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "day3": {"label": "PQPF Day 3", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "day4": {"label": "PQPF Day 4", "min_fcst_hr": 0, "fcst_hr_step": 24},
                    "day5": {"label": "PQPF Day 5", "min_fcst_hr": 0, "fcst_hr_step": 24}
                }
            }
        },
        "CSU EROs": {
            "url_end": "CSU_ERO/[RUN]/csuero_",
            "display_slider": false,
            "no_fhr_in_url": true,
            "num_fcst_hrs": 1,
            "run_hrs": ["00","12"],
            "groups": [],
            "skip_display": ["experimental"],
            "parameters": {
                "UFVS GEFSv2022": {
                    "eroufvsday1": {"label": "Day 1", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday2": {"label": "Day 2", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday3": {"label": "Day 3", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday4": {"label": "Day 4", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday5": {"label": "Day 5", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday6": {"label": "Day 6", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday7": {"label": "Day 7", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "eroufvsday8": {"label": "Day 8", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Fixed Freq. GEFSv2022": {
                    "erofv3gefsrday1": {"label": "Day 1", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday2": {"label": "Day 2", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday3": {"label": "Day 3", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday4": {"label": "Day 4", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday5": {"label": "Day 5", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday6": {"label": "Day 6", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday7": {"label": "Day 7", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erofv3gefsrday8": {"label": "Day 8", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Fixed Freq. GEFSv2020": {
                    "erogefsoday1": {"label": "Day 1", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erogefsoday2": {"label": "Day 2", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "erogefsoday3": {"label": "Day 3", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Fixed Freq. HRRR": {
                    "erohrrrday1": {"label": "Day 1", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "Fixed Freq. NSSL": {
                    "eronssl2day1": {"label": "Day 1", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        }
    },
    "ari_ffg": {
        "Flash Flood Guidance" :{
            "url_end": "FFG/[RUN]/ffg_", 
            "url_full_path": "https://www.wpc.ncep.noaa.gov/hmt/hmt_webpages/images/FFG/[RUN]/ffg_[PARAMETER]hr_[RUN:YYYYMMDDHH]f[PARAMETER:STR2].png",
            "num_fcst_hrs": 1,
            "display_slider": false,
            "run_hrs": ["00","06","12","18"],
            "groups": [],
            "parameters": {
                "Hour": {
                    "1": {"label": "FFG 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3": {"label": "FFG 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6": {"label": "FFG 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "12": {"label": "FFG 12hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24": {"label": "FFG 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        },
        "NOAA Atlas14 ARI" :{
            "url_end": "ARI/recurrence_", 
            "num_fcst_hrs": 1,
            "static_image": true,
            "display_slider": false,
            "run_hrs": ["00","12"],
            "groups": [],
            "parameters": {
                "1hr duration": {
                    "1hr_1yr": {"label": "  1yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_2yr": {"label": "  2yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_5yr": {"label": "  5yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_10yr": {"label": " 10yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_25yr": {"label": " 25yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_50yr": {"label": " 50yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_100yr": {"label": "100yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_200yr": {"label": "200yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_500yr": {"label": "500yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "1hr_1000yr": {"label": "1000yr 1hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "3hr duration": {
                    "3hr_1yr": {"label": "  1yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_2yr": {"label": "  2yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_5yr": {"label": "  5yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_10yr": {"label": " 10yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_25yr": {"label": " 25yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_50yr": {"label": " 50yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_100yr": {"label": "100yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_200yr": {"label": "200yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_500yr": {"label": "500yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_1000yr": {"label": "1000yr 3hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "6hr duration": {
                    "6hr_1yr": {"label": "  1yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_2yr": {"label": "  2yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_5yr": {"label": "  5yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_10yr": {"label": " 10yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_25yr": {"label": " 25yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_50yr": {"label": " 50yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_100yr": {"label": "100yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_200yr": {"label": "200yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_500yr": {"label": "500yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_1000yr": {"label": "1000yr 6hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "24hr duration": {
                    "24hr_1yr": {"label": "  1yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_2yr": {"label": "  2yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_5yr": {"label": "  5yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_10yr": {"label": " 10yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_25yr": {"label": " 25yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_50yr": {"label": " 50yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_100yr": {"label": "100yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_200yr": {"label": "200yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_500yr": {"label": "500yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_1000yr": {"label": "1000yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "48hr duration": {
                    "48hr_1yr": {"label": "  1yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_2yr": {"label": "  2yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_5yr": {"label": "  5yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_10yr": {"label": " 10yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_25yr": {"label": " 25yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_50yr": {"label": " 50yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_100yr": {"label": "100yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_200yr": {"label": "200yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_500yr": {"label": "500yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_1000yr": {"label": "1000yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "72hr duration": {
                    "72hr_1yr": {"label": "  1yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_2yr": {"label": "  2yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_5yr": {"label": "  5yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_10yr": {"label": " 10yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_25yr": {"label": " 25yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_50yr": {"label": " 50yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_100yr": {"label": "100yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_200yr": {"label": "200yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_500yr": {"label": "500yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_1000yr": {"label": "1000yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "96hr duration": {
                    "96hr_1yr": {"label": "  1yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_2yr": {"label": "  2yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_5yr": {"label": "  5yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_10yr": {"label": " 10yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_25yr": {"label": " 25yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_50yr": {"label": " 50yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_100yr": {"label": "100yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_200yr": {"label": "200yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_500yr": {"label": "500yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_1000yr": {"label": "1000yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "168hr (7 days) duration": {
                    "168hr_1yr": {"label": "  1yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_2yr": {"label": "  2yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_5yr": {"label": "  5yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_10yr": {"label": " 10yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_25yr": {"label": " 25yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_50yr": {"label": " 50yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_100yr": {"label": "100yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_200yr": {"label": "200yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_500yr": {"label": "500yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_1000yr": {"label": "1000yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "1yr ARI": {
                    "1hr_1yr": {"label": "  1yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_1yr": {"label": "  1yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_1yr": {"label": "  1yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_1yr": {"label": "  1yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_1yr": {"label": "  1yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_1yr": {"label": "  1yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_1yr": {"label": "  1yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_1yr": {"label": "  1yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "2yr ARI": {
                    "1hr_2yr": {"label": "  2yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_2yr": {"label": "  2yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_2yr": {"label": "  2yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_2yr": {"label": "  2yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_2yr": {"label": "  2yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_2yr": {"label": "  2yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_2yr": {"label": "  2yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_2yr": {"label": "  2yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "5yr ARI": {
                    "1hr_5yr": {"label": "  5yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_5yr": {"label": "  5yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_5yr": {"label": "  5yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_5yr": {"label": "  5yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_5yr": {"label": "  5yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_5yr": {"label": "  5yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_5yr": {"label": "  5yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_5yr": {"label": "  5yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "10yr ARI": {
                    "1hr_10yr": {"label": " 10yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_10yr": {"label": " 10yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_10yr": {"label": " 10yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_10yr": {"label": " 10yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_10yr": {"label": "  10yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_10yr": {"label": "  10yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_10yr": {"label": "  10yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_10yr": {"label": "  10yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "25yr ARI": {
                    "1hr_25yr": {"label": " 25yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_25yr": {"label": " 25yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_25yr": {"label": " 25yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_25yr": {"label": " 25yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_25yr": {"label": "  25yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_25yr": {"label": "  25yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_25yr": {"label": "  25yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_25yr": {"label": "  25yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "50yr ARI": {
                    "1hr_50yr": {"label": " 50yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_50yr": {"label": " 50yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_50yr": {"label": " 50yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_50yr": {"label": " 50yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_50yr": {"label": "  50yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_50yr": {"label": "  50yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_50yr": {"label": "  50yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_50yr": {"label": "  50yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "100yr ARI": {
                    "1hr_100yr": {"label": "100yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_100yr": {"label": "100yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_100yr": {"label": "100yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_100yr": {"label": "100yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_100yr": {"label": "  100yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_100yr": {"label": "  100yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_100yr": {"label": "  100yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_100yr": {"label": "  100yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "200yr ARI": {
                    "1hr_200yr": {"label": "200yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_200yr": {"label": "200yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_200yr": {"label": "200yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_200yr": {"label": "200yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_200yr": {"label": "  200yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_200yr": {"label": "  200yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_200yr": {"label": "  200yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_200yr": {"label": "  200yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "500yr ARI": {
                    "1hr_500yr": {"label": "500yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_500yr": {"label": "500yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_500yr": {"label": "500yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_500yr": {"label": "500yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_500yr": {"label": "  500yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_500yr": {"label": "  500yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_500yr": {"label": "  500yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_500yr": {"label": "  500yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                },
                "1000yr ARI": {
                    "1hr_1000yr": {"label": "1000yr  1hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "3hr_1000yr": {"label": "1000yr  3hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "6hr_1000yr": {"label": "1000yr  6hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "24hr_1000yr": {"label": "1000yr 24hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "48hr_1000yr": {"label": "  1000yr 48hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "72hr_1000yr": {"label": "  1000yr 72hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "96hr_1000yr": {"label": "  1000yr 96hr", "min_fcst_hr": 1, "fcst_hr_step": 1},
                    "168hr_1000yr": {"label": "  1000yr 168hr", "min_fcst_hr": 1, "fcst_hr_step": 1}
                }
            }
        }
    }
}
