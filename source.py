import json
from os import listdir
from os.path import isfile, join



def get_dependencies(contract_definition, cid):
    child = None

    for child in contract_definition['ast']['children']:
        if child['id'] == cid:
            break

    result = set(child['attributes']['contractDependencies'] + child['attributes']['linearizedBaseContracts'])
    return [item for item in result if item and item != cid]

contract_path = './build/contracts/'

contracts = [json.load(open(contract_path+f)) for f in listdir(contract_path) if isfile(join(contract_path, f))]

id_map = {}
name_map = {}
id_dep_map = {}

for contract in contracts:
    es_map = contract['ast']['attributes']['exportedSymbols']

    for es in es_map:
        contract_id = es_map[es][0]
        id_map[contract_id] = contract
        name_map[es] = contract
        id_dep_map[contract_id] = get_dependencies(contract, contract_id)

print '\n'.join(map(str, id_map.keys()))
exit(2)

contract_name = 'CrowdsaleToken'
contract_definition = name_map[contract_name]
contract_id = contract_definition['ast']['attributes']['exportedSymbols'][contract_name][0]

def print_contract_source(contract_id, printed=[]):
    dependencies = id_dep_map[contract_id]

    if contract_id in printed:
        return

    if len(dependencies) > 0:
        for dep in dependencies:
            print_contract_source(dep, printed)


    contract_definition = id_map[contract_id]
    print contract_definition['source']
    printed.append(contract_id)

print_contract_source(contract_id)
