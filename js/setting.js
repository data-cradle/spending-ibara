/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'ibarashi_2015_ippan';
OpenSpending.year = '2015';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
'1':     { icon: 'icons/government-uk.svg',              color : '#C75746', bcolor : '#935B3B' },
'1-1':   { icon: 'icons/government-uk.svg',              color : '#C75746', bcolor : '#935B3B' },
'2':     { icon: 'icons/publicaffairs.svg',              color : '#C75746', bcolor : '#0AB971' },
'2-1':   { icon: 'icons/government-uk.svg',              color : '#C75746', bcolor : '#0AB971' },
'2-2':   { icon: 'icons/books.svg',                      color : '#C75746', bcolor : '#0AB971' },
'2-3':   { icon: 'icons/money.svg',                      color : '#C75746', bcolor : '#0AB971' },
'2-4':   { icon: 'icons/planning.svg',                   color : '#C75746', bcolor : '#0AB971' },
'2-5':   { icon: 'icons/publicaffairs.svg',              color : '#C75746', bcolor : '#0AB971' },
'2-6':   { icon: 'icons/family2.svg',                    color : '#C75746', bcolor : '#0AB971' },
'2-7':   { icon: 'icons/financial-admin.svg',            color : '#C75746', bcolor : '#0AB971' },
'2-8':   { icon: 'icons/transport.svg',                  color : '#C75746', bcolor : '#0AB971' },
'2-9':   { icon: 'icons/civilian-action.svg',            color : '#C75746', bcolor : '#0AB971' },
'2-10':  { icon: 'icons/housing.svg',                    color : '#C75746', bcolor : '#0AB971' },
'2-11':  { icon: 'icons/aid-developing-countries.svg',   color : '#C75746', bcolor : '#0AB971' },
'2-12':  { icon: 'icons/misc-services.svg',              color : '#C75746', bcolor : '#0AB971' },
'2-13':  { icon: 'icons/admin.svg',                      color : '#C75746', bcolor : '#0AB971' },
'2-14':  { icon: 'icons/public-debt.svg',                color : '#C75746', bcolor : '#0AB971' },
'2-15':  { icon: 'icons/books.svg',                      color : '#C75746', bcolor : '#0AB971' },
'2-16':  { icon: 'icons/legislative.svg',                color : '#C75746', bcolor : '#0AB971' },
'2-17':  { icon: 'icons/planning.svg',                   color : '#C75746', bcolor : '#0AB971' },
'2-18':  { icon: 'icons/courts.svg',                     color : '#C75746', bcolor : '#0AB971' },
'3':     { icon: 'icons/family2.svg',                    color : '#C75746', bcolor : '#4E6D00' },
'3-1':   { icon: 'icons/old-age.svg',                    color : '#C75746', bcolor : '#4E6D00' },
'3-2':   { icon: 'icons/money.svg',                      color : '#C75746', bcolor : '#4E6D00' },
'3-3':   { icon: 'icons/public-debt.svg',                color : '#C75746', bcolor : '#4E6D00' },
'3-4':   { icon: 'icons/unemployment.svg',               color : '#C75746', bcolor : '#4E6D00' },
'3-5':   { icon: 'icons/helping-others.svg',             color : '#C75746', bcolor : '#4E6D00' },
'3-6':   { icon: 'icons/health.svg',                     color : '#C75746', bcolor : '#4E6D00' },
'3-7':   { icon: 'icons/old-age.svg',                    color : '#C75746', bcolor : '#4E6D00' },
'3-8':   { icon: 'icons/economic-aid.svg',               color : '#C75746', bcolor : '#4E6D00' },
'3-9':   { icon: 'icons/housing.svg',                    color : '#C75746', bcolor : '#4E6D00' },
'3-10':  { icon: 'icons/public-debt.svg',                color : '#C75746', bcolor : '#4E6D00' },
'3-11':  { icon: 'icons/pre-school.svg',                 color : '#C75746', bcolor : '#4E6D00' },
'3-12':  { icon: 'icons/unemployment.svg',               color : '#C75746', bcolor : '#4E6D00' },
'3-13':  { icon: 'icons/foreign-military-aid.svg',       color : '#C75746', bcolor : '#4E6D00' },
'4':     { icon: 'icons/helping-others.svg',             color : '#C75746', bcolor : '#D33673' },
'4-1':   { icon: 'icons/hospital.svg',                   color : '#C75746', bcolor : '#D33673' },
'4-2':   { icon: 'icons/health.svg',                     color : '#C75746', bcolor : '#D33673' },
'4-3':   { icon: 'icons/medical-supplies.svg',           color : '#C75746', bcolor : '#D33673' },
'4-4':   { icon: 'icons/family.svg',                     color : '#C75746', bcolor : '#D33673' },
'4-5':   { icon: 'icons/our-streets.svg',                color : '#C75746', bcolor : '#D33673' },
'4-6':   { icon: 'icons/family2.svg',                    color : '#C75746', bcolor : '#D33673' },
'4-7':   { icon: 'icons/family2.svg',                    color : '#C75746', bcolor : '#D33673' },
'4-8':   { icon: 'icons/pollution.svg',                  color : '#C75746', bcolor : '#D33673' },
'4-9':   { icon: 'icons/energy2.svg',                    color : '#C75746', bcolor : '#D33673' },
'4-10':  { icon: 'icons/garbage.svg',                    color : '#C75746', bcolor : '#D33673' },
'4-11':  { icon: 'icons/waste.svg',                      color : '#C75746', bcolor : '#D33673' },
'4-12':  { icon: 'icons/toilet.svg',                     color : '#C75746', bcolor : '#D33673' },
'5':     { icon: 'icons/labour.svg',                     color : '#C75746', bcolor : '#2A3A03' },
'5-1':   { icon: 'icons/legislative.svg',                color : '#C75746', bcolor : '#2A3A03' },
'5-2':   { icon: 'icons/admin.svg',                      color : '#C75746', bcolor : '#2A3A03' },
'6':     { icon: 'icons/farms.svg',                      color : '#C75746', bcolor : '#EC2406' },
'6-1':   { icon: 'icons/admin.svg',                      color : '#C75746', bcolor : '#EC2406' },
'6-2':   { icon: 'icons/environment-admin.svg',          color : '#C75746', bcolor : '#EC2406' },
'6-3':   { icon: 'icons/civilian-action.svg',            color : '#C75746', bcolor : '#EC2406' },
'6-4':   { icon: 'icons/pig.svg',                        color : '#C75746', bcolor : '#EC2406' },
'6-5':   { icon: 'icons/coal.svg',                       color : '#C75746', bcolor : '#EC2406' },
'6-6':   { icon: 'icons/housing.svg',                    color : '#C75746', bcolor : '#EC2406' },
'6-7':   { icon: 'icons/housing.svg',                    color : '#C75746', bcolor : '#EC2406' },
'6-8':   { icon: 'icons/forest.svg',                     color : '#C75746', bcolor : '#EC2406' },
'7':     { icon: 'icons/economic-aid.svg',               color : '#C75746', bcolor : '#935B3B' },
'7-1':   { icon: 'icons/economic-aid.svg',               color : '#C75746', bcolor : '#935B3B' },
'7-2':   { icon: 'icons/money.svg',                      color : '#C75746', bcolor : '#935B3B' },
'7-3':   { icon: 'icons/economy-tourism.svg',            color : '#C75746', bcolor : '#935B3B' },
'7-4':   { icon: 'icons/financial-admin.svg',            color : '#C75746', bcolor : '#935B3B' },
'8':     { icon: 'icons/manufactoring-construction.svg', color : '#C75746', bcolor : '#935B3B' },
'8-1':   { icon: 'icons/forest.svg',                     color : '#C75746', bcolor : '#935B3B' },
'8-2':   { icon: 'icons/street-lights.svg',              color : '#C75746', bcolor : '#935B3B' },
'8-3':   { icon: 'icons/street-lights.svg',              color : '#C75746', bcolor : '#935B3B' },
'8-4':   { icon: 'icons/street-lights.svg',              color : '#C75746', bcolor : '#935B3B' },
'8-5':   { icon: 'icons/car.svg',                        color : '#C75746', bcolor : '#935B3B' },
'8-6':   { icon: 'icons/island.svg',                     color : '#C75746', bcolor : '#935B3B' },
'8-7':   { icon: 'icons/our-streets.svg',                color : '#C75746', bcolor : '#935B3B' },
'8-8':   { icon: 'icons/housing.svg',                    color : '#C75746', bcolor : '#935B3B' },
'9':     { icon: 'icons/fire-brigade.svg',               color : '#C75746', bcolor : '#935B3B' },
'9-1':   { icon: 'icons/rd-order-safety.svg',            color : '#C75746', bcolor : '#935B3B' },
'9-2':   { icon: 'icons/fire-brigade.svg',               color : '#C75746', bcolor : '#935B3B' },
'9-3':   { icon: 'icons/financial-admin.svg',            color : '#C75746', bcolor : '#935B3B' },
'9-4':   { icon: 'icons/planning.svg',                   color : '#C75746', bcolor : '#935B3B' },
'9-5':   { icon: 'icons/water.svg',                      color : '#C75746', bcolor : '#935B3B' },
'10':    { icon: 'icons/education.svg',                  color : '#C75746', bcolor : '#935B3B' },
'10-1':  { icon: 'icons/education.svg',                  color : '#C75746', bcolor : '#935B3B' },
'10-2':  { icon: 'icons/human-resources.svg',            color : '#C75746', bcolor : '#935B3B' },
'10-3':  { icon: 'icons/legislative.svg',                color : '#C75746', bcolor : '#935B3B' },
'10-4':  { icon: 'icons/primary.svg',                    color : '#C75746', bcolor : '#935B3B' },
'10-5':  { icon: 'icons/secondary-lower.svg',            color : '#C75746', bcolor : '#935B3B' },
'10-6':  { icon: 'icons/post-secondary.svg',             color : '#C75746', bcolor : '#935B3B' },
'10-7':  { icon: 'icons/pre-school.svg',                 color : '#C75746', bcolor : '#935B3B' },
'10-8':  { icon: 'icons/misc-services.svg',              color : '#C75746', bcolor : '#935B3B' },
'10-9':  { icon: 'icons/civilian-action.svg',            color : '#C75746', bcolor : '#935B3B' },
'10-10': { icon: 'icons/books.svg',                      color : '#C75746', bcolor : '#935B3B' },
'10-11': { icon: 'icons/post-secondary.svg',             color : '#C75746', bcolor : '#935B3B' },
'10-12': { icon: 'icons/schools.svg',                    color : '#C75746', bcolor : '#935B3B' },
'10-13': { icon: 'icons/family.svg',                     color : '#C75746', bcolor : '#935B3B' },
'10-14': { icon: 'icons/family.svg',                     color : '#C75746', bcolor : '#935B3B' },
'10-15': { icon: 'icons/family2.svg',                    color : '#C75746', bcolor : '#935B3B' },
'10-16': { icon: 'icons/health.svg',                     color : '#C75746', bcolor : '#935B3B' },
'10-17': { icon: 'icons/sports.svg',                     color : '#C75746', bcolor : '#935B3B' },
'10-18': { icon: 'icons/pig.svg',                        color : '#C75746', bcolor : '#935B3B' },
'10-19': { icon: 'icons/fishing.svg',                    color : '#C75746', bcolor : '#935B3B' },
'11':    { icon: 'icons/aid-developing-countries.svg',   color : '#C75746', bcolor : '#935B3B' },
'11-1':  { icon: 'icons/farms.svg',                      color : '#C75746', bcolor : '#935B3B' },
'11-2':  { icon: 'icons/forest.svg',                     color : '#C75746', bcolor : '#935B3B' },
'12':    { icon: 'icons/money.svg',                      color : '#C75746', bcolor : '#935B3B' },
'12-1':  { icon: 'icons/money.svg',                      color : '#C75746', bcolor : '#935B3B' },
'13':    { icon: 'icons/public-debt.svg',                color : '#C75746', bcolor : '#935B3B' },
'13-1':  { icon: 'icons/water.svg',                      color : '#C75746', bcolor : '#935B3B' },
'13-2':  { icon: 'icons/ambulance.svg',                  color : '#C75746', bcolor : '#935B3B' },
'14':    { icon: 'icons/financial-admin.svg',            color : '#C75746', bcolor : '#935B3B' },
'14-1':  { icon: 'icons/financial-admin.svg',            color : '#C75746', bcolor : '#935B3B' }

};
