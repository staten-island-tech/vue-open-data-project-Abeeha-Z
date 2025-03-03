def calcSmallest(N, pos): 
    sortPos = sorted(pos)
    nSizes = 0
    i = -1
    for p in sortPos:
        i += 1
        if sortPos[0] == p or sortPos[-1] == p:
            continue
        else:
            sV = (p - sortPos[i-1])/2
            bV = (sortPos[i+1] - p)/2
            nV = bV + sV
            if nSizes == 0:
                nSizes = nV
            else:
                if nSizes > nV:
                    nSizes = nV

    return nSizes

print(calcSmallest(5, [16, 0, 10, 4, 15]))